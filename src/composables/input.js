import { reactive } from "vue"

const useInput = function(label, value, type) {
  let state = reactive({
    label: label,
    value: value,
    message: "",
    error: false,
    disabled: false,
    type: type
  })

  return state;
}

export default useInput;