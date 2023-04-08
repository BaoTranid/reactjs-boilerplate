import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getExample } from './service/services'

const Example = () => {
  const dispatch = useDispatch()

  const onChange = useCallback(() => {
    alert('Return to home page to view console.log')
    return fetchData(Math.random())
  }, [])

  const fetchData = useCallback(
    (param = 1) => {
      console.log(param)
      dispatch(getExample(param))
    },
    [dispatch]
  )

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchData()
    }, 0)
    return () => clearTimeout(getData)
  }, [fetchData])

  return (
    <div>
      Example <button onClick={onChange}>Update redux</button>
    </div>
  )
}

export default Example
