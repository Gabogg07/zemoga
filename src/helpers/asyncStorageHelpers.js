import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => { 
    try {    
        const jsonValue = JSON.stringify(value)    
        await AsyncStorage.setItem(key, jsonValue)  
    } catch (e) {    
    }
}

export const getData = async (value) => { 
    try {    
        const jsonValue = await AsyncStorage.getItem(value)    
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {    
    }
}