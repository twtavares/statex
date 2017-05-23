import { OnDestroy, OnInit } from '@angular/core'
import { subscribe, unsubscribe } from '../core'

/**
 * Every component that uses `@BindAction` must extends from this
 * class in order to make sure that AOT won't delete OnInit and
 * OnDestroy life-cycle events used by the decorator, irrespective
 * of the fact that it may or may not be used by the component itself
 *
 * @export
 * @class DataObserver
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
export class DataObserver implements OnInit, OnDestroy {

  ngOnInit() {
    subscribe.bind(this)()
  }

  ngOnDestroy() {
    unsubscribe.bind(this)()
  }
}