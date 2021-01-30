import axios from 'axios'

export const SAVE_USER = 'save_user'

export const fetchUser = () => async (dispatch) => {
  // 获取用户列表
  let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  // 保存用户数据
  dispatch({
    type: SAVE_USER,
    payload: data,
  })
}
