let servidorAPI="http://localhost:8081/";
const cedula="1193098419";

class CuidadorForm {
    constructor() {
      this.form = document.getElementById("agregarCuidador");
      this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      if (this.validateForm()) {
        const cuidador = {
          nombre: this.getValue("nombre"),
          parentesco: this.getValue("parentesco"),
          
          direccion: this.getValue("direccion"),
          telefono: this.getValue("telefono"),
          //hipertension: this.getCheckedValue("hipertension"),
          //diabetes: this.getCheckedValue("diabetes")
        };
  
        this.guardarCuidador(cuidador);
      }
    }
  
    validateForm() {
      let isValid = true;
  
      const requiredFields = ["nombre", "parentesco", "direccion", "telefono"];
  
      requiredFields.forEach(field => {
        const value = this.getValue(field);
  
        if (!value) {
          isValid = false;
          this.setFieldError(field, "Campo obligatorio");
        } else {
          this.clearFieldError(field);
        }
      });
  
      return isValid;
    }
  
    getValue(fieldId) {
      const field = document.getElementById(fieldId);
      return field.value.trim();
    }
  
    setFieldError(fieldId, errorMessage) {
      const field = document.getElementById(fieldId);
      const errorElement = field.nextElementSibling;
      errorElement.textContent = errorMessage;
      field.classList.add("error");
    }
  
    clearFieldError(fieldId) {
      const field = document.getElementById(fieldId);
      const errorElement = field.nextElementSibling;
      field.classList.remove("error");
    }
  
    guardarPaciente(paciente) {
      console.log(paciente);
     //REEMPLAZAR BACKEND 
      fetch("http://localhost:8081/paciente/crearCuidador", {
        method: "POST",
        body: JSON.stringify(paciente),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        pacienteForm.form.style.display = "none";

      })
      .catch(error => {
        console.error(error);
      });
    }
  }
  
  const pacienteForm = new PacienteForm();
  