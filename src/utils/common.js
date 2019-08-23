export function actionCreatorUtil(type) {
    return payload => ({
        type,
        payload,
    })
}