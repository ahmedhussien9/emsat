import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

const arabicDirectionClose = {
  marginRight: "62px",
  marginLeft: "initial"
}

const englishDirectionClose = {
  marginRight: "initial",
  marginLeft: "62px"
}

const arabicDirectionOpen = {
  marginRight: "200px",
  marginLeft: "initial"
}
const englishDirectionOpen = {
  marginRight: "initial",
  marginLeft: "200px"
}
const lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
const handleCloseDirValues = () =>  lang === 'en' ? englishDirectionClose : arabicDirectionClose;
const handleOpenDirValues = () => lang === "en" ? englishDirectionOpen : arabicDirectionOpen;

export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      ...handleCloseDirValues
    })
  ),
  state('open',
    style({
      ...handleOpenDirValues
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);