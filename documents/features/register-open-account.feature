Feature: Registro de usuario y apertura de nueva cuenta bancaria

  Scenario: Usuario registrado abre exitosamente una nueva cuenta
    Given que el usuario accede a la página de registro
    When completa el formulario de registro con datos válidos
    And finaliza el registro
    Then debería ver un mensaje confirmando la creación de la cuenta

    When navega a la sección "Open New Account"
    And selecciona el tipo de cuenta "Savings"
    And confirma la apertura de la nueva cuenta
    Then debería ver el mensaje "Account Opened!" y el ID de la nueva cuenta creada
