export const assignRisk = risk => ({
  type: 'ASSIGNRISK',
  payload: risk
});

export const assignBonds = amount => ({
  type: 'BONDS',
  payload: amount
});

export const changeBonds = amount => ({
  type: 'NEWBONDS',
  payload: amount
});

export const assignLargeCap = amount => ({
    type: 'LARGECAP',
    payload: amount
});

export const changeLargeCap = amount => ({
  type: 'NEWLARGECAP',
  payload: amount
});

export const assignMidCap = amount => ({
    type: 'MIDCAP',
    payload: amount
});

export const changeMidCap = amount => ({
  type: 'NEWMIDCAP',
  payload: amount
});

export const assignSmallCap = amount => ({
    type: 'SMALLCAP',
    payload: amount
});

export const changeSmallCap = amount => ({
  type: 'NEWSMALLCAP',
  payload: amount
});

export const assignForeign = amount => ({
    type: 'FOREIGN',
    payload: amount
});

export const changeForeign = amount => ({
  type: 'NEWFOREIGN',
  payload: amount
});