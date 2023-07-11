# Parallax Effect using JS

> Add an engaging parallax effect to your website using JavaScript.

![ezgif com-video-to-gif](https://github.com/SPAbhay/Parallax-Web-Dev/assets/35527492/3716b0bf-5756-4ee4-aa1c-161ada207eec)

## Table of Contents

- [Installation](#installation)
- [Parallax with Mouse Position](#parallax-with-mouse-scrolling)
  - [Formulas](#formulas)
- [Parallax with Depth](#parallax-with-depth)
  - [Formulas](#formulas-1)

## Parallax with Mouse changing Position

Create an immersive parallax effect by synchronizing website elements with the user's mouse position. The parallax effect adds dynamism to your webpage, enhancing the overall user experience. 

### Formulas

To achieve the parallax effect with mouse coordinates, the following formulas are utilized:

- **Input Range**: Calculate the range of values between the start and end points.
  ```
  inputRange = endValue - startValue
  ```

- **Relative Current Mouse Position**: Determine the relative position of the current mouse position within the range.
  ```
  relativeCurrentMousePosition = currentMousePosition - startValue
  ```

- **Fraction Value**: Calculate the fraction value based on the relative current mouse position and input range. This fraction value is used for selecting only a part of the website.
  ```
  fractionValue = relativeCurrentMousePosition / inputRange
  ```

- **Output Value**: Determine the output value by combining the output start value and the fraction value multiplied by the output range.
  ```
  outputValue = outputStartValue + (fractionValue * outputRange)
  ```

## Parallax with Depth

Create a dynamic parallax effect by adjusting the depth of website elements. By varying the depth of different elements, you can simulate a sense of perspective and make certain objects appear closer or further away from the viewer, enhancing the visual experience.

### Formulas

To achieve the parallax effect with depth, the following formulas are utilized:

- **Item Output X**: Calculate the output position on the X-axis using the current output value and item depth.
  ```
  itemOutput.x = output.x.current - (output.x.current * itemDepth)
  ```

- **Item Output Y**: Calculate the output position on the Y-axis using the current output value and item depth.
  ```
  itemOutput.y = output.y.current - (output.y.current * itemDepth)
  ```

- **Z-Index Range**: Set the range for the z-index values.
  ```
  zIndexRange = 1000
  ```

- **Item Z-Index**: Calculate the z-index value for an item based on its depth.
  ```
  itemZIndex = zIndexRange - (zIndexRange * itemDepth)
  ```

- **Scaling with Depth**: Scale items based on their depth using the start and end scale values.
  ```
  scaleStart = 1
  scaleEnd = 0.5
  scaleRange = scaleEnd - scaleStart
  itemScale = scaleStart + (scaleRange * depth)
  ```

- **Blurring with Depth**: Apply blur to items based on their depth using the blur start depth and range.
  ```
  blurStartDepth = 0.5
  blurRange = 14
  itemBlur = (depth - blurStartDepth) * blurRange
  ```

  (Negative blur values mean no blur)
