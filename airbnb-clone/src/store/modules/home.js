import { getDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/api/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => dispatch(changeGoodPriceInfoAction(res)))
  getHomeHighScoreData().then((res) => dispatch(changehighScoreInfoAction(res)))
  getDiscountData().then((res) => dispatch(changeDiscountInfoAction(res)))
  getDiscountData().then((res) => dispatch(changeDiscountInfoAction(res)))
  getHomeHotRecommendData().then(res => dispatch(changeRecommendInfoAction(res)))
  getHomeLongforData().then(res => dispatch(changeLongforInfoAction(res)))
  getHomePlusData().then(res => dispatch(changePlusInfoAction(res)))
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changehighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(payload);
    //   state.goodPriceInfo = payload.goodPriceInfo
    //   state.highScoreInfo = payload.highScoreInfo

    // }
  }
})
export const { changeGoodPriceInfoAction, changehighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction, changeLongforInfoAction, changePlusInfoAction } = homeSlice.actions
export default homeSlice.reducer
