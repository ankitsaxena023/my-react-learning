/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const ItemList = ({ title }) => {

  return (
    <>
      <div>
        <input type="checkbox" />
        <input type="text" value={title} readOnly />
        <button>edit</button>
        <button>delete</button>
      </div>

    </>
  )
}

export default ItemList