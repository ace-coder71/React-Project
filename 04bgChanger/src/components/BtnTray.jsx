import React from 'react'
import Button from './Button'

function BtnTray() {
    return (
        <div className='bg-white flex gap-2 px-4 py-2 rounded-md'>
            <Button/>
            <Button bgColor='bg-green-500' btnName='Green'/>
            <Button bgColor='bg-blue-500' btnName='Blue'/>
            <Button bgColor='bg-teal-500' btnName='Teal'/>
            <Button bgColor='bg-gray-500' btnName='Gray'/>
            <Button bgColor='bg-yellow-500' btnName='Yellow'/>
            <Button bgColor='bg-pink-500' btnName='Pink'/>
            <Button bgColor='bg-purple-500' btnName='Purple'/>
            <Button bgColor='bg-rose-500' btnName='Rose'/>
            <Button bgColor='bg-white' btnName='White' brdr='border-red' txColor='text-black'/>
            <Button bgColor='bg-black-500' btnName='Black'/>
        </div>
    )
}

export default BtnTray
