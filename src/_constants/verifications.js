import methods from '@constants/methods';
import { DOC_TYPE, DOC_SIDES, LIVENESS_TYPES } from '@constants';

export default [
  {
    id: 1,
    flag: '🇺🇸',
    methods: [
      methods.unitedStatesDriversLicense,
      methods.passiveLiveness,
      methods.SORCheck,
    ],
    countryCode: 'USA',
    docType: DOC_TYPE.DRIVING_LICENSE,
    livenessType: LIVENESS_TYPES.PASSIVE,
    sorCheck: true,
    docSides: [
      { id: DOC_SIDES.SIDE1, name: DOC_SIDES.FRONT },
      { id: DOC_SIDES.SIDE2, name: DOC_SIDES.BACK },
    ],
  },
  {
    id: 2,
    flag: '🇺🇸',
    methods: [
      methods.unitedStatesPassport,
      methods.passiveLiveness,
      methods.SORCheck,
    ],
    countryCode: 'USA',
    docType: DOC_TYPE.PASSPORT,
    livenessType: LIVENESS_TYPES.PASSIVE,
    sorCheck: true,
    docSides: [{ id: DOC_SIDES.SIDE1, name: DOC_SIDES.INSIDE_PAGE }],
  },
];
