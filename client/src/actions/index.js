export const assignRisk = risk => ({
  type: 'ASSIGNRISK',
  payload: risk
});

export const assignBonds = amount => ({
  type: 'BONDS',
  payload: amount
});

export const assignLargeCap = amount => ({
    type: 'LARGECAP',
    payload: amount
});

export const assignMidCap = amount => ({
    type: 'MIDCAP',
    payload: amount
});

export const assignSmallCap = amount => ({
    type: 'SMALLCAP',
    payload: amount
});

export const assignForeign = amount => ({
    type: 'FOREIGN',
    payload: amount
});