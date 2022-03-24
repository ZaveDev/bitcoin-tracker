import {useLocalStorage} from './useLocalStorage'

 
export const useDarkMode = (value) => {
  const [darkmode, setDarkmode] = useLocalStorage("darkmode", value)
  
  const onChange = bool => {
    setDarkmode(bool)
  }

  return [darkmode, onChange]
};
