const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TYPEDOCUMENT':
      return {
        ...state,
        typeDocument: action.payload,
      };

    case 'SET_NUMBERDOCUMENT':
      return {
        ...state,
        numberDocument: action.payload,
      };

    case 'SET_CELULAR':
      return {
        ...state,
        celular: action.payload,
      };

    case 'SET_DATACAR':
      return {
        ...state,
        dataCar: { ...state.dataCar, ...action.payload },
      };

    case 'SET_MONTHLYAMOUNT':
      return {
        ...state,
        monthlyAmount: action.payload,
      };

    case 'SET_PERSON':
      return {
        ...state,
        dataPerson: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
