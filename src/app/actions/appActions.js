import * as types from 'Actions'
import AppLocalBootstrapActions from 'app_local'


export function loadData() {
    return new Promise((resolve, reject) => {
        $.getJSON('data/pets.json')
            .done((data) => {
                resolve(data)
            })
            .fail((jqxhr, textStatus, error) => {
                var err = textStatus + ", " + error
                reject(err)
            })
    })
}

/***
 * Load data happens in app startup, we initiate of loader here as well
 */
export function startSetData() {
    return (dispatch, getState) => {
        types.loadData().then((data) => {
            dispatch(types.setData(data))
            AppLocalBootstrapActions.initLoader() // init loader
        })
    }
}

export function setData(data) {
    return {
        type: types.SET_DATA,
        data
    }
}

export function setCurrentPet(pet){
    return {
        type: types.CURRENT_PET,
        currentPet: pet
    }
}

export function setCurrentAppointment(appointment){
    return{
        type: types.CURRENT_APPOINTMENT,
        currentAppointment: appointment
    }
}


