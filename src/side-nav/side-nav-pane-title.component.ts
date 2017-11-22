import { Component, Input, ViewChild } from "@angular/core";


/**
 * class: SideNavPaneTitle
 * selector: `n-side-nav-pane-title`
 *
 * SideNavPaneTitle expects some title to be projected,
 * to be used as the title of the fly in sub view.
 *
 * @export
 * @class SideNavPaneTitle
 */
@Component({
	selector: "n-side-nav-pane-title",
	template: `
	<button
	class="subpanel_heading"
	type="button"
	aria-level="3"
	(click)="hidePane()"
	#item>
		<ng-content></ng-content>
	</button>
  `
})
export class SideNavPaneTitle {
	@ViewChild("item") item;

	hidePane() {
		this.item.nativeElement.closest(".side-nav_subpanel").classList.remove("slide-in");

		// hide after the animation
		setTimeout( () => {
			this.item.nativeElement.closest(".side-nav_subpanel-wrapper").setAttribute("style", "display: none;");
			this.item.nativeElement.closest("li").querySelector("a").focus();
		}, 360);
	}
}
