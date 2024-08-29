import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toastTrigger } from "../helpers";
import contactImg from "/img/contact.webp";
import "./form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef();
  const [showInput, setShowInput] = useState(false);

  function handleSelect (event) {
    console.log('Seleccionado')    
  };

  const onSubmit = () => {
    emailjs
      .sendForm("service_pg4co8c", "template_bei7f32", formRef.current, {
        publicKey: "pBoTgqHCZk4hAQemu",
      })
      .then(
        () => {
          console.log("Form", formRef.current);
          toastTrigger(
            "success",
            "Mensaje enviado, responderemos lo antes posible."
          );
          reset();
        },
        (error) => {
          toastTrigger(
            "error",
            "Ocurrió un error enviando el mensaje, intentelo de nuevo mas tarde."
          );
          reset();
          console.log(error);
        }
      );
  };

  return (
    <div className="form-container m-auto">
      <form ref={formRef} className="form" onSubmit={handleSubmit(onSubmit)}>
        <img
          src={contactImg}
          alt="Imagen de Contact"
          className="w-1/2 pr-5 border-r-2 border-slate-200 rounded-tl-2xl rounded-bl-2xl hidden md:block"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-around">
          <label className="text-slate-100 font-semibold text-4xl">
            Contacto
          </label>
          <div className="text-md font-semibold flex flex-col gap-2 text-slate-300 pt-2 pb-4">
            <a href="tel:+54 9 11-5308-8311">📞 11-5308-8311</a>
            <a href="mailto:obras@zingueriadontorcuato.com">
              📧 obras@zingueriadontorcuato.com
            </a>
            <a href="https://maps.app.goo.gl/CRXirRQz7JU6ahxPA">
              📍 Av. Lib. Gral. San Martín 1695. Don Torcuato, Buenos. Aires.
            </a>
            <a href="#">⏰ Lun a Vie - 8:00hs a 13:00hs y 14:00hs a 17:00hs</a>
          </div>

          <div className="form-group">
            <label for="name">Nombre</label>
            <input
              name="nombre"
              id="nombre"
              type="text"
              {...register("name", { required: true })}
            />
          </div>

          <div className="form-group">
            <label for="mail">Email</label>
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("mail", { required: true })} type="mail" />
            {/* errors will return when field validation fails  */}
            {errors.mail && <span>Este campo es obligatorio.</span>}
          </div>

          <div className="form-group">
            <label for="text">Empresa</label>
            <input {...register("empresa")} type="text" />
          </div>

          <div className="form-group input">
            <label for="negocio">Tipo de negocio</label>
            <input type="select" />
            <select   
              onChange={() => {console.log('Hola')}}                                   
              className="options bg-transparent px-[12px] py-[8px] border border-[#adadad] rounded-md "
              {...register("negocio")}
              name="negocio"
              id="neg"
            >
              <option defaultValue className="text-gray-700">
                Elija su tipo de negocio...
              </option>
              <option className="text-black" value="Fábrica">
                Fábrica
              </option>
              <option className="text-black" value="Depósito">
                Depósito
              </option>
              <option className="text-black" value="Comercio">
                Comercio
              </option>
              <option onChange={() => {console.log('Hola')}} className="text-black" value="Otro">
                Otro
              </option>
            </select>
          </div>

          {showInput ? (
            <div className="form-group form-hidden">
              <label for="otro">Especifique su tipo de negocio</label>
              <input name="otro" id="otro" type="text" {...register("otro")} />
            </div>
          ) : null}

          <div className="form-group">
            <label for="textarea">¿Cómo podemos ayudarte?</label>
            <textarea
              required=""
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
}
