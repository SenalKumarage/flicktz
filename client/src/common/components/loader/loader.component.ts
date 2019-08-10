import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  /** Used to show the animation */
  public loadingAnimation = false;

  /** Internal flag */
  private _loading: boolean;

  /** Delay used to display the animation */
  private _delay = 300;

  /** the property on which the overlay's z-index is binded */
  public customOverlayZIndex = 2;

  /** since the overlay's z-index property can't be set efficiently once and for all use case,
   * it could become necessary to set it on demand.
   */
  @Input() set overlayZIndex(zIndex: number) {
      this.customOverlayZIndex = zIndex;
  }

  /**
   * Set the loading with a timeout to avoid blinking
   */
  @Input() set loading(loading: boolean) {

      this._loading = loading;

      // When true, delay the animation
      if (loading) {

          setTimeout(() => {
              // If loading is still true, activate the visual animation
              if (this._loading) {
                  this.loadingAnimation = true;
              }
          }, this._delay);

      } else {
          this.loadingAnimation = false;
      }
  }

  /**
   * Set a delay for the animation to be triggered
   */
  @Input() set delay(delay: number) {

      if (delay > 0 && delay < 5000) {
          this._delay = delay;
      }
  }
}
