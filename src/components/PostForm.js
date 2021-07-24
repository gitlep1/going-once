import { useEffect, useRef } from "react";
import { StyledForm } from "../components/Styles/Form"

export default function PostForm
  ({inputs, handleSubmit, resetForm, handleChange, addressChange}) {
  
  const addressInput = useRef(null);
  
  useEffect(()=> {
    const options = {
      componentRestrictions: { country: "us" },
      fields: ["address_components", "geometry", "formatted_address"],
      types: ["address"],
    };
    const autocomplete = new window.google.maps.places.Autocomplete(
      addressInput.current, options)
    autocomplete.addListener('place_changed', () => {
      const result = autocomplete.getPlace();
      const coords = {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
      }
      addressChange(coords)
    })
  },[]);
  
  return (
    <>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input 
            type="text"
            name="title"
            required
            value={inputs.title}
            onChange={handleChange}
          
          />
          <label htmlFor="description">Description</label>
          <textarea 
            name="description"
            value={inputs.description}
            onChange={handleChange}

          />
          <label htmlFor="address">Address</label>
          <input 
            type="text"
            name="address"
            required
            value={inputs.address || ''}
            onChange={handleChange}
            onBlur={handleChange}
            ref={addressInput}
          />
          <label htmlFor="condition">Condition</label>
          <input 
            type="text"
            name="condition"
            value={inputs.condition}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit">Post Item</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </StyledForm>
    </>
  )
}