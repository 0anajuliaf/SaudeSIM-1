import React, {useState} from "react";
import { View, TextInput, Text, Button } from "react-native";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState ("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")

    function imcCalculator(){
        return setImc ((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc(" Seu IMC é = ")
            setTextButton("Calcular Novamente") 
        } 
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return(  
        <View>
         <View>
            <Text>Altura</Text>
            <TextInput
            placeholder="Ex. 1.75"
            keyboardType="numeric"/>

            <Text>Peso</Text>
            <TextInput
            placeholder="Ex. 80.365"
            keyboardType="numeric"/>

            <Button
            onPress={() => validationImc()}
            title={textButton}
            />

         </View>
        </View>
    );
}