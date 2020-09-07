import React from 'react'
import Layout from '../appContainer/shared/components/Navigation/Layout'
import Input from '../appContainer/shared/components/formElement/Input'

const auth = () => {
    return (
        <Layout>
            <form>
                <Input
                    type="text"
                    element="input"
                />
            </form>
        </Layout>
    )
}

export default auth
