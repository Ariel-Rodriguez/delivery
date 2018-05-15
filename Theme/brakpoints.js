function whenDesktop(rules) {
  return `
    @media only screen and (min-width : 768px) {
      ${rules}
    }
  `
}

function whenPhone(rules) {
  return `
    @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
      ${rules}
    }
  `
}

export default {
  whenPhone,
  whenDesktop,
}
