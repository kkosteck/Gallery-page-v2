import { onMounted, onBeforeUnmount } from 'vue'

export function useClickOutside(elTargetRef, callbackFunc){
    if (!elTargetRef) return

    let listener = (e) => {
        if ((e.target === elTargetRef.value || e.composedPath().includes(elTargetRef.value))){
            return
        }
        if (typeof callbackFunc == 'function'){
            callbackFunc()
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
    })
    onBeforeUnmount(() => {
        window.addEventListener('click', listener)
    })
    return {
        listener
    }
}