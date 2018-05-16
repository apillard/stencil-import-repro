import { Component, Method } from '@stencil/core';
import Layer from 'esri/layers/layer';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Method()
  addLayer(newLayer: Layer): void { // TODO trying to use layer type import won't resolve in components.d.ts
    console.log('new layer', newLayer);
  }
}
