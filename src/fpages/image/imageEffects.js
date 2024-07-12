// imageEffects.js
export const applySketchEffect = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const brightness = (3 * data[i] + 6 * data[i + 1] + data[i + 2]) >>> 3;
      data[i] = brightness;
      data[i + 1] = brightness;
      data[i + 2] = brightness;
    }

    context.putImageData(imageData, 0, 0);
  };

 // imageEffects.js

// Function to apply a comic book style effect to an image
export const applyComicEffect = (context, width, height) => {
  // Get the image data
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Apply comic effect transformation to RGB channels
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];

    // Calculate grayscale value
    const grayscale = 0.2989 * red + 0.587 * green + 0.114 * blue;

    // Apply comic effect by setting the red, green, and blue channels to grayscale
    data[i] = grayscale;
    data[i + 1] = grayscale;
    data[i + 2] = grayscale;
  }

  // Put the modified image data back to the canvas
  context.putImageData(imageData, 0, 0);
};


export const applySepiaEffect = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      data[i] = Math.min(255, (0.393 * r + 0.769 * g + 0.189 * b));
      data[i + 1] = Math.min(255, (0.349 * r + 0.686 * g + 0.168 * b));
      data[i + 2] = Math.min(255, (0.272 * r + 0.534 * g + 0.131 * b));
    }

    context.putImageData(imageData, 0, 0);
  };

export const applyGrayscaleEffect = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = brightness;
      data[i + 1] = brightness;
      data[i + 2] = brightness;
    }

    context.putImageData(imageData, 0, 0);
  };

  export const applyHighContrastEffect = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
  
    for (let i = 0; i < data.length; i += 4) {
      data[i] = data[i] < 128 ? 0 : 255;
      data[i + 1] = data[i + 1] < 128 ? 0 : 255;
      data[i + 2] = data[i + 2] < 128 ? 0 : 255;
    }
  
    context.putImageData(imageData, 0, 0);
  };
  
  export const applyInvertColorsEffect = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
  
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    }
  
    context.putImageData(imageData, 0, 0);
  };
  
  export const applySaturationAdjustment = (context, width, height, saturation) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
  
    for (let i = 0; i < data.length; i += 4) {
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  
      const intensity = 0.3 * r + 0.59 * g + 0.11 * b;
      data[i] = intensity + saturation * (r - intensity);
      data[i + 1] = intensity + saturation * (g - intensity);
      data[i + 2] = intensity + saturation * (b - intensity);
    }
  
    context.putImageData(imageData, 0, 0);
  };
  
  export const applyHueRotation = (context, width, height, angle) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
  
    const angleRad = (angle * Math.PI) / 180;
    const cosA = Math.cos(angleRad);
    const sinA = Math.sin(angleRad);
  
    for (let i = 0; i < data.length; i += 4) {
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  
      data[i] = cosA * r - sinA * g;
      data[i + 1] = sinA * r + cosA * g;
      data[i + 2] = cosA * b + sinA * r;
    }
  
    context.putImageData(imageData, 0, 0);
  };

  export const applyColorBalanceAdjustment = (context, width, height, redAdjustment, greenAdjustment, blueAdjustment) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, data[i] * redAdjustment); // Adjust Red channel
        data[i + 1] = Math.min(255, data[i + 1] * greenAdjustment); // Adjust Green channel
        data[i + 2] = Math.min(255, data[i + 2] * blueAdjustment); // Adjust Blue channel
    }

    context.putImageData(imageData, 0, 0);
};

export const applyOilPaintingEffect = (context, width, height, brushSize) => {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  const levels = 256;
  const intensityLevels = new Array(levels);

  for (let i = 0; i < levels; i++) {
      intensityLevels[i] = 0;
  }

  for (let i = 0; i < data.length; i += 4) {
      const intensity = (data[i] + data[i + 1] + data[i + 2]) / 3;
      intensityLevels[intensity]++;
  }

  for (let i = 0; i < data.length; i += 4) {
      const intensity = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const brushIntensity = Math.round(intensity / levels * (levels - 1) / brushSize) * brushSize;

      data[i] = intensityLevels[brushIntensity] * (brushIntensity / levels);
      data[i + 1] = intensityLevels[brushIntensity] * (brushIntensity / levels);
      data[i + 2] = intensityLevels[brushIntensity] * (brushIntensity / levels);
  }

  context.putImageData(imageData, 0, 0);
};


export const applyVignetteEffect = (context, width, height) => {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % width;
    const y = Math.floor(i / 4 / width);

    // Calculate distance from the center of the image
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

    // Vignette effect formula
    const vignetteAmount = 1 - (distance / Math.sqrt(centerX ** 2 + centerY ** 2));

    // Apply vignette effect to the pixel
    data[i] *= vignetteAmount;
    data[i + 1] *= vignetteAmount;
    data[i + 2] *= vignetteAmount;
  }

  context.putImageData(imageData, 0, 0);
};
