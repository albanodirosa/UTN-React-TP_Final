import { Form } from "react-bootstrap";

function Input({ label, type = "text", name, register, placeholder, children}){
    return (
      <Form.Group className="mb-3" controlId={name}>
          <Form.Label>{label}</Form.Label>
          <Form.Control type={type} placeholder={placeholder} {...register}/>
          {children && children}
      </Form.Group>
    );
  }
  
  export default Input;
  