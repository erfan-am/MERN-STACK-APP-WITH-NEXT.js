import Layout from "../../appContainer/shared/components/Navigation/Layout"
import Input from "../../appContainer/shared/components/formElement/Input"
import styles from './newplace.module.css';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../appContainer/shared/utils/validators";
import Button from "../../appContainer/shared/components/formElement/Button";
import { useForm } from "../../appContainer/shared/hooks/formhook";
const newplace = () => {
    const [formState,inputHandler]=useForm({
                title:{
                    value:'',
                    isValid:false
                },
                description:{
                    value:'',
                    isValid:false
                }
    },
            false
    )
    return (
        <Layout>
        <form  className={styles.place_form}>
                <Input
                    type="text"
                    id="title"
                    placeholder="Enter your name"
                    errorText="please enter a valid title"
                    element="input"
                    label="Title"
                    onInput={inputHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                />
                  <Input
                    id="description"                
                    errorText="please enter a valid title"
                    label="username"
                    onInput={inputHandler}
                    validators={[VALIDATOR_MINLENGTH(5)]}
                />
                <Button type="submit" >ADD PLACE</Button>
            </form>
        </Layout>
    )
}

export default newplace
