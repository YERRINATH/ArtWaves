import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SketchCanvasStyles.css';
import { downloadSketchImage, saveDrawing } from './drawF';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedNotification = async () => {
  // Show a notification when the component mounts
  toast.info('Drawing Saved ', {
    position: "top-right",
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const SketchCanvas = () => {
  const canvasRef = useRef(null);
  const [brushSize, setBrushSize] = useState(4);
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [previousColor, setPreviousColor] = useState('#FFFFFF');
  const [eraserMode, setEraserMode] = useState(false);
  const [drawingId, setDrawingId] = useState(null); // State to store the identifier
  const [drawingData, setDrawingData] = useState(null);
  const [title, setTitle] = useState('Untitled'); // State for the title

  useEffect(() => {
    // Show a notification when the component mounts
    toast.info('Welcome to the drawing canvas! this is a proto type there are many limitations hope you understand :) Thank You ', {
      position: "top-right",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);


  const handleSaveDrawing = async () => {
    try {
      if (canvasRef.current) {
        const data = await canvasRef.current.exportImage('png');
        setDrawingData(data);
        const savedDrawingId = await saveDrawing(title, data);
        setDrawingId(savedDrawingId);
        console.log('Drawing saved successfully');
        SavedNotification();
      }
    } catch (error) {
      console.error('Error saving drawing:', error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };



  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape') {
      // Handle Escape key if needed
    }
  }, []);

  useEffect(() => {
  }, [drawingId]);

  const handleExportImage = async (format) => {
    try {
      if (!canvasRef.current) return;
      const data = await canvasRef.current.exportImage(format);
      downloadSketchImage(data, format);
    } catch (error) {
      console.error('Error exporting image:', error);
    }
  };

  const handleToggleEraser = () => {
    setEraserMode((prevEraserMode) => !prevEraserMode);
    if (!eraserMode) {
      setPreviousColor(strokeColor);
      setStrokeColor('#FFFFFF');
    } else {
      setStrokeColor(previousColor);
    }
  };

  const handleBrushSizeChange = ({ target: { value } }) => {
    const size = parseInt(value, 10);
    setBrushSize(size);

    if (canvasRef.current) {
      canvasRef.current.strokeWidth = size;
    }
  };

  const handleUndo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();
    }
  };

  const handleClearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const handleRedo = () => {
    if (canvasRef.current) {
      canvasRef.current.redo();
    }
  };

  const handleColorChange = ({ target: { value } }) => {
    const isValidColor = /^#[0-9A-Fa-f]{6}$/i.test(value);
    if (isValidColor) {
      setStrokeColor(value);

      if (canvasRef.current) {
        const tool = eraserMode ? 'eraser' : 'line';
        canvasRef.current.tool = tool;
        canvasRef.current.color = value;
      }
    } else {
      console.error('Invalid color format. Please use the format "#rrggbb".');
    }
  };

  const handleMouseDown = (e) => {
    if (canvasRef.current) {
      const { offsetX, offsetY } = e.nativeEvent;

      if (!eraserMode) {
        const line = {
          tool: 'line',
          points: [
            { x: offsetX - 2, y: offsetY - 2 },
            { x: offsetX + 2, y: offsetY + 2 },
          ],
          color: strokeColor,
          size: brushSize,
        };

        canvasRef.current.addLine(line);
      } else {
        const eraserSize = brushSize * 2;
        const eraserRect = {
          tool: 'rectangle',
          x: offsetX - eraserSize / 2,
          y: offsetY - eraserSize / 2,
          width: eraserSize,
          height: eraserSize,
          color: 'white',
        };

        canvasRef.current.erase(eraserRect);
      }
    }
  };

  return (
      <div className="SketchCanvasWrapper" style={{ marginTop: '80px' }}>
        <ToastContainer/>
        <div className="CanvasContainer">
        <input
          type="text"
          className="form-control"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
        />
        <button className="btn btn-primary" onClick={() => handleExportImage('png')}>
          Get PNG
        </button>
        <label htmlFor="colorInput">
          Color:
          <input
            id="colorInput"
            className="form-control"
            type="color"
            value={strokeColor}
            onChange={(e) => handleColorChange(e)}
          />
        </label>
        <button className="btn btn-secondary" onClick={handleToggleEraser}>
          {eraserMode ? 'Drawing Mode' : 'Eraser Mode'}
        </button>
        <label>
          Brush Size:
          <input
            className="form-control"
            type="range"
            min="1"
            max="30"
            value={brushSize}
            onChange={(e) => handleBrushSizeChange(e)}
          />
        </label>
        <div className="ButtonsRow">
          <button className="btn btn-success" onClick={handleUndo}>
            Undo
          </button>
          <button className="btn btn-success" onClick={handleRedo}>
            Redo
          </button>
        </div>
        <button className="btn btn-danger" onClick={handleClearCanvas}>
          Clear Canvas
        </button>
        <button onClick={handleSaveDrawing}>Save Drawing</button>
        <div className="SettingsPanel">{/* Color input moved to the top */}</div>
      </div>
      <div className="ButtonContainer">
        <ReactSketchCanvas
        width={1210}
        height={650}
          ref={canvasRef}
          strokeWidth={brushSize}
          strokeColor={strokeColor}
          eraseMode={eraserMode}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
}  

export default SketchCanvas;
