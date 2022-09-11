import { toast } from 'bulma-toast'

export function showErrorToast(error){
    if (error.response) {
        let toastData = {
            message: 'Something went wrong. Please try again',
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
        }
        for (const property in error.response.data) {
            toastData.message = `${property}: ${error.response.data[property]}`
            toast(toastData)
        }
    } else {
        toast(toastData)
    }
}