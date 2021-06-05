export const assignRisk = (risk) => {
  return {
    type: 'ASSIGNRISK',
    payload: risk
  }
}

export const assignBonds = (amount) => {
  return {
    type: 'BONDS',
    payload: amount
  }
}

export const assignLargeCap = (amount) => {
  return {
    type: 'LARGECAP',
    payload: amount
  }
}
export const assignMidCap = (amount) => {
  return {
    type: 'MIDCAP',
    payload: amount
  }
}
export const assignSmallCap = (amount) => {
  return {
    type: 'SMALLCAP',
    payload: amount
  }
}
export const assignForeign = (amount) => {
  return {
    type: 'FOREIGN',
    payload: amount
  }
}