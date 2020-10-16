precision mediump float;
precision mediump int;

attribute vec3 position;
// attribute vec2 uv; 今回は使わない

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;


void main(){
  vec4 pos = vec4(position.r, position.g, position.b, 1.0);// rgba


  /******************
  以下のように書くこともできる

  vec4 pos = vec4(
  position.r,
   position.g,
    position.b,
  1.0);
  ******************/

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * pos;
}
