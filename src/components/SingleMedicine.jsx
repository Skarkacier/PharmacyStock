import React from 'react'

function SingleMedicine({medicine, onDelete}) {

  const handleDeleteClick = () =>{
    onDelete(medicine.medicineId)
  };

  return (
    <div className='single-medicine'>
      <h5>İlaç ismi: {medicine.medicineName}</h5>
      <p>İlaç grubu: {medicine.influenceGroup}</p>
      <p>Stock bilgisi: {medicine.stock}</p>
      <p>Şirket bilgisi: {medicine.company}</p>
      <p>Fiyat: {medicine.price}</p>
      <p>featureId: {medicine.featureId}</p>
      <button className='button-delete' onClick={handleDeleteClick}>
        Sil
      </button>
    </div>
  )
}

export default SingleMedicine