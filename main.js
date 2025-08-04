// Dados dos robôs em diferentes idiomas
const robotData = {
  'pt-br': {
    basic: {
      title: 'Robô Básico',
      description: 'Este é um robô simples, ideal para iniciantes. Aprenda a montar passo a passo!',
      image: 'images/robot_basic.svg',
      materials: [
        '1 Arduino Uno',
        '2 Motores DC',
        '1 Chassi de plástico ou madeira',
        '2 Rodas',
        '1 Roda giratória (para equilíbrio)',
        '1 Ponte H L298N',
        'Fios jumper',
        '1 Bateria 9V ou 4 pilhas AA com suporte',
        'Parafusos e porcas',
        'Fita dupla face ou cola quente'
      ],
      steps: [
        {
          title: 'Preparação do Chassi',
          description: 'Corte o chassi no formato desejado (geralmente retangular) com dimensões aproximadas de 15cm x 10cm. Faça furos para fixar os motores e a roda giratória.'
        },
        {
          title: 'Montagem dos Motores',
          description: 'Fixe os dois motores DC na parte traseira do chassi, um de cada lado, usando parafusos ou cola quente. Certifique-se de que estão alinhados.'
        },
        {
          title: 'Instalação das Rodas',
          description: 'Encaixe as rodas nos eixos dos motores. Instale a roda giratória na parte frontal do chassi para dar estabilidade ao robô.'
        },
        {
          title: 'Conexão da Ponte H',
          description: 'Fixe a ponte H L298N no chassi. Conecte os fios dos motores às saídas da ponte H (OUT1, OUT2 para o primeiro motor e OUT3, OUT4 para o segundo).'
        },
        {
          title: 'Conexão do Arduino',
          description: 'Posicione o Arduino no chassi e conecte-o à ponte H: pinos IN1, IN2, IN3 e IN4 da ponte H aos pinos digitais do Arduino (ex: 8, 9, 10, 11). Conecte o pino ENA ao pino PWM 5 e ENB ao pino PWM 6 do Arduino.'
        },
        {
          title: 'Alimentação',
          description: 'Conecte a bateria 9V ou o suporte de pilhas à entrada de alimentação da ponte H. Você também pode alimentar o Arduino diretamente pela entrada de alimentação ou via USB durante os testes.'
        },
        {
          title: 'Programação',
          description: 'Conecte o Arduino ao computador via USB e carregue o código básico para controle dos motores. O código deve definir os pinos como saída e controlar a velocidade e direção dos motores.'
        },
        {
          title: 'Teste',
          description: 'Após carregar o programa, teste o robô para verificar se os motores estão funcionando corretamente e se o robô se move para frente, para trás e faz curvas conforme programado.'
        }
      ]
    },
    intermediate: {
      title: 'Robô Intermediário',
      description: 'Um robô mais avançado com sensores para detecção de obstáculos e seguidor de linha.',
      image: 'images/robot_intermediate.svg',
      materials: [
        'Todos os materiais do Robô Básico',
        '1 Sensor ultrassônico HC-SR04',
        '2 Sensores infravermelhos TCRT5000',
        '1 Servo motor SG90',
        '1 Protoboard pequena',
        'Mais fios jumper',
        '1 Suporte para 6 pilhas AA (para maior autonomia)'
      ],
      steps: [
        {
          title: 'Montagem da Base',
          description: 'Monte a base do robô seguindo os passos 1 a 6 do Robô Básico.'
        },
        {
          title: 'Instalação do Sensor Ultrassônico',
          description: 'Fixe o sensor ultrassônico HC-SR04 na parte frontal do robô. Conecte o pino TRIG ao pino digital 2 e o pino ECHO ao pino digital 3 do Arduino.'
        },
        {
          title: 'Instalação do Servo Motor',
          description: 'Fixe o servo motor na parte frontal, acima ou abaixo do sensor ultrassônico. Conecte o fio de sinal ao pino digital 4 do Arduino.'
        },
        {
          title: 'Instalação dos Sensores de Linha',
          description: 'Fixe os sensores infravermelhos TCRT5000 na parte inferior frontal do chassi, apontando para baixo, a uma distância de aproximadamente 0,5cm do solo. Conecte-os aos pinos analógicos A0 e A1 do Arduino.'
        },
        {
          title: 'Conexões na Protoboard',
          description: 'Use a protoboard para organizar as conexões entre os sensores e o Arduino. Alimente os sensores com 5V e GND do Arduino.'
        },
        {
          title: 'Programação Avançada',
          description: 'Programe o Arduino para ler os sensores e tomar decisões: desviar de obstáculos usando o sensor ultrassônico e seguir linhas usando os sensores infravermelhos.'
        },
        {
          title: 'Calibração',
          description: 'Calibre os sensores de linha ajustando os valores de threshold no código para distinguir entre a linha (geralmente preta) e o fundo (geralmente branco).'
        },
        {
          title: 'Teste e Ajustes',
          description: 'Teste o robô em diferentes superfícies e com diferentes obstáculos. Ajuste o código e a posição dos sensores conforme necessário para melhorar o desempenho.'
        }
      ]
    },
    advanced: {
      title: 'Robô Avançado',
      description: 'Um robô sofisticado com visão computacional, controle via smartphone e capacidade de mapeamento.',
      image: 'images/robot_advanced.svg',
      materials: [
        'Todos os materiais do Robô Intermediário',
        '1 Raspberry Pi 4 ou similar',
        '1 Câmera para Raspberry Pi',
        '1 Módulo Bluetooth HC-05 ou WiFi ESP8266',
        '1 Display LCD 16x2 com módulo I2C',
        '1 Sensor de distância a laser VL53L0X (mais preciso que o ultrassônico)',
        '1 Sensor IMU (acelerômetro e giroscópio) MPU6050',
        '1 Bateria de lítio de alta capacidade com circuito de carga',
        '1 Conversor DC-DC para regular a tensão'
      ],
      steps: [
        {
          title: 'Montagem da Plataforma Avançada',
          description: 'Construa um chassi mais robusto, preferencialmente com múltiplas camadas para acomodar todos os componentes. Você pode usar acrílico cortado a laser ou impressão 3D.'
        },
        {
          title: 'Instalação do Sistema de Processamento',
          description: 'Monte o Raspberry Pi na plataforma e conecte-o ao Arduino via USB ou comunicação serial. O Raspberry será o cérebro principal e o Arduino controlará os motores e sensores básicos.'
        },
        {
          title: 'Configuração da Câmera',
          description: 'Instale a câmera no Raspberry Pi e posicione-a na parte frontal superior do robô para uma boa visão do ambiente. Configure o software de visão computacional (OpenCV) no Raspberry Pi.'
        },
        {
          title: 'Instalação dos Sensores Avançados',
          description: 'Monte o sensor de distância a laser e o IMU. Conecte o sensor laser ao Raspberry Pi via I2C e o IMU ao Arduino via I2C.'
        },
        {
          title: 'Configuração da Comunicação',
          description: 'Instale e configure o módulo Bluetooth ou WiFi para permitir o controle remoto via smartphone. Desenvolva um aplicativo simples ou use aplicativos existentes para controle.'
        },
        {
          title: 'Instalação do Display',
          description: 'Monte o display LCD na parte superior do robô e conecte-o ao Raspberry Pi via I2C para exibir informações de status, leituras de sensores e mensagens.'
        },
        {
          title: 'Sistema de Alimentação',
          description: 'Configure o sistema de alimentação com a bateria de lítio e o conversor DC-DC para fornecer tensões estáveis para todos os componentes (5V para o Raspberry Pi e sensores, tensão adequada para os motores).'
        },
        {
          title: 'Programação do Sistema Completo',
          description: 'Desenvolva o software para o Raspberry Pi (Python é recomendado) para processar imagens da câmera, mapear o ambiente, tomar decisões e se comunicar com o Arduino e o smartphone.'
        },
        {
          title: 'Implementação de Algoritmos Avançados',
          description: 'Implemente algoritmos de SLAM (Simultaneous Localization and Mapping) para que o robô possa criar um mapa do ambiente e se localizar nele. Adicione algoritmos de planejamento de trajetória para navegação autônoma.'
        },
        {
          title: 'Testes e Otimização',
          description: 'Realize testes extensivos em diferentes ambientes. Otimize os algoritmos e ajuste os parâmetros para melhorar o desempenho, a precisão e a eficiência energética.'
        }
      ]
    },
    // Textos da interface
    ui: {
      langLabel: 'Idioma:',
      showStepsBtn: 'Ver Como Fazer',
      materialsTitle: 'Materiais Necessários',
      stepsTitle: 'Passo a Passo',
      errorToolsTitle: 'Ferramentas de Diagnóstico',
      detectErrorTitle: 'Detectar Erros',
      solveErrorTitle: 'Solucionar Erros',
      resetErrorTitle: 'Resetar Erros',
      footerText: '© 2023 Guia Completo de Robôs. Todos os direitos reservados.',
      // Textos dos erros
      errors: {
        1: 'Erro 1: Motor não está funcionando corretamente. Verifique as conexões.',
        2: 'Erro 2: Bateria com carga baixa. Recarregue ou substitua as baterias.',
        3: 'Erro 3: Sensor ultrassônico não está detectando obstáculos.',
        4: 'Erro 4: Problemas na comunicação entre Arduino e Raspberry Pi.',
        5: 'Erro 5: Sensores de linha não estão calibrados corretamente.'
      },
      // Textos das soluções
      solutions: {
        1: 'Solução aplicada: Reconexão dos fios do motor e verificação da ponte H.',
        2: 'Solução aplicada: Sistema de alimentação otimizado e baterias substituídas.',
        3: 'Solução aplicada: Recalibração e limpeza dos sensores.'
      },
      // Textos dos resets
      resets: {
        1: 'Reset completo: Todos os sistemas foram reiniciados.',
        2: 'Reset parcial: Apenas os sensores foram reiniciados.'
      }
    }
  },
  'en': {
    basic: {
      title: 'Basic Robot',
      description: 'This is a simple robot, ideal for beginners. Learn how to build it step by step!',
      image: 'images/robot_basic.svg',
      materials: [
        '1 Arduino Uno',
        '2 DC Motors',
        '1 Plastic or wooden chassis',
        '2 Wheels',
        '1 Caster wheel (for balance)',
        '1 H-Bridge L298N',
        'Jumper wires',
        '1 9V battery or 4 AA batteries with holder',
        'Screws and nuts',
        'Double-sided tape or hot glue'
      ],
      steps: [
        {
          title: 'Chassis Preparation',
          description: 'Cut the chassis in the desired shape (usually rectangular) with approximate dimensions of 15cm x 10cm. Make holes to attach the motors and the caster wheel.'
        },
        {
          title: 'Motor Assembly',
          description: 'Attach the two DC motors to the rear of the chassis, one on each side, using screws or hot glue. Make sure they are aligned.'
        },
        {
          title: 'Wheel Installation',
          description: 'Fit the wheels onto the motor shafts. Install the caster wheel at the front of the chassis to provide stability to the robot.'
        },
        {
          title: 'H-Bridge Connection',
          description: 'Attach the L298N H-Bridge to the chassis. Connect the motor wires to the H-Bridge outputs (OUT1, OUT2 for the first motor and OUT3, OUT4 for the second).'
        },
        {
          title: 'Arduino Connection',
          description: 'Position the Arduino on the chassis and connect it to the H-Bridge: pins IN1, IN2, IN3, and IN4 of the H-Bridge to the Arduino digital pins (e.g., 8, 9, 10, 11). Connect the ENA pin to Arduino PWM pin 5 and ENB to PWM pin 6.'
        },
        {
          title: 'Power Supply',
          description: 'Connect the 9V battery or the battery holder to the H-Bridge power input. You can also power the Arduino directly through its power input or via USB during testing.'
        },
        {
          title: 'Programming',
          description: 'Connect the Arduino to the computer via USB and upload the basic code for motor control. The code should set the pins as outputs and control the speed and direction of the motors.'
        },
        {
          title: 'Testing',
          description: 'After uploading the program, test the robot to verify that the motors are working correctly and that the robot moves forward, backward, and turns as programmed.'
        }
      ]
    },
    intermediate: {
      title: 'Intermediate Robot',
      description: 'A more advanced robot with sensors for obstacle detection and line following.',
      image: 'images/robot_intermediate.svg',
      materials: [
        'All materials from the Basic Robot',
        '1 HC-SR04 ultrasonic sensor',
        '2 TCRT5000 infrared sensors',
        '1 SG90 servo motor',
        '1 Small breadboard',
        'More jumper wires',
        '1 Holder for 6 AA batteries (for greater autonomy)'
      ],
      steps: [
        {
          title: 'Base Assembly',
          description: 'Assemble the robot base following steps 1 to 6 of the Basic Robot.'
        },
        {
          title: 'Ultrasonic Sensor Installation',
          description: 'Attach the HC-SR04 ultrasonic sensor to the front of the robot. Connect the TRIG pin to digital pin 2 and the ECHO pin to digital pin 3 of the Arduino.'
        },
        {
          title: 'Servo Motor Installation',
          description: 'Attach the servo motor to the front, above or below the ultrasonic sensor. Connect the signal wire to digital pin 4 of the Arduino.'
        },
        {
          title: 'Line Sensor Installation',
          description: 'Attach the TCRT5000 infrared sensors to the bottom front of the chassis, pointing downward, at a distance of approximately 0.5cm from the ground. Connect them to the Arduino analog pins A0 and A1.'
        },
        {
          title: 'Breadboard Connections',
          description: 'Use the breadboard to organize the connections between the sensors and the Arduino. Power the sensors with 5V and GND from the Arduino.'
        },
        {
          title: 'Advanced Programming',
          description: 'Program the Arduino to read the sensors and make decisions: avoid obstacles using the ultrasonic sensor and follow lines using the infrared sensors.'
        },
        {
          title: 'Calibration',
          description: 'Calibrate the line sensors by adjusting the threshold values in the code to distinguish between the line (usually black) and the background (usually white).'
        },
        {
          title: 'Testing and Adjustments',
          description: 'Test the robot on different surfaces and with different obstacles. Adjust the code and sensor positions as needed to improve performance.'
        }
      ]
    },
    advanced: {
      title: 'Advanced Robot',
      description: 'A sophisticated robot with computer vision, smartphone control, and mapping capabilities.',
      image: 'images/robot_advanced.svg',
      materials: [
        'All materials from the Intermediate Robot',
        '1 Raspberry Pi 4 or similar',
        '1 Camera for Raspberry Pi',
        '1 HC-05 Bluetooth module or ESP8266 WiFi module',
        '1 16x2 LCD display with I2C module',
        '1 VL53L0X laser distance sensor (more precise than ultrasonic)',
        '1 MPU6050 IMU sensor (accelerometer and gyroscope)',
        '1 High-capacity lithium battery with charging circuit',
        '1 DC-DC converter to regulate voltage'
      ],
      steps: [
        {
          title: 'Advanced Platform Assembly',
          description: 'Build a more robust chassis, preferably with multiple layers to accommodate all components. You can use laser-cut acrylic or 3D printing.'
        },
        {
          title: 'Processing System Installation',
          description: 'Mount the Raspberry Pi on the platform and connect it to the Arduino via USB or serial communication. The Raspberry Pi will be the main brain, and the Arduino will control the motors and basic sensors.'
        },
        {
          title: 'Camera Setup',
          description: 'Install the camera on the Raspberry Pi and position it at the front top of the robot for a good view of the environment. Configure the computer vision software (OpenCV) on the Raspberry Pi.'
        },
        {
          title: 'Advanced Sensor Installation',
          description: 'Mount the laser distance sensor and the IMU. Connect the laser sensor to the Raspberry Pi via I2C and the IMU to the Arduino via I2C.'
        },
        {
          title: 'Communication Setup',
          description: 'Install and configure the Bluetooth or WiFi module to allow remote control via smartphone. Develop a simple app or use existing apps for control.'
        },
        {
          title: 'Display Installation',
          description: 'Mount the LCD display on the top of the robot and connect it to the Raspberry Pi via I2C to display status information, sensor readings, and messages.'
        },
        {
          title: 'Power System',
          description: 'Configure the power system with the lithium battery and the DC-DC converter to provide stable voltages for all components (5V for the Raspberry Pi and sensors, appropriate voltage for the motors).'
        },
        {
          title: 'Complete System Programming',
          description: 'Develop the software for the Raspberry Pi (Python is recommended) to process camera images, map the environment, make decisions, and communicate with the Arduino and smartphone.'
        },
        {
          title: 'Advanced Algorithm Implementation',
          description: 'Implement SLAM (Simultaneous Localization and Mapping) algorithms so the robot can create a map of the environment and locate itself within it. Add trajectory planning algorithms for autonomous navigation.'
        },
        {
          title: 'Testing and Optimization',
          description: 'Conduct extensive testing in different environments. Optimize the algorithms and adjust the parameters to improve performance, accuracy, and energy efficiency.'
        }
      ]
    },
    // Interface texts
    ui: {
      langLabel: 'Language:',
      showStepsBtn: 'See How to Build',
      materialsTitle: 'Required Materials',
      stepsTitle: 'Step by Step',
      errorToolsTitle: 'Diagnostic Tools',
      detectErrorTitle: 'Detect Errors',
      solveErrorTitle: 'Solve Errors',
      resetErrorTitle: 'Reset Errors',
      footerText: '© 2023 Complete Robot Guide. All rights reserved.',
      // Error texts
      errors: {
        1: 'Error 1: Motor is not working properly. Check the connections.',
        2: 'Error 2: Low battery. Recharge or replace the batteries.',
        3: 'Error 3: Ultrasonic sensor is not detecting obstacles.',
        4: 'Error 4: Communication issues between Arduino and Raspberry Pi.',
        5: 'Error 5: Line sensors are not properly calibrated.'
      },
      // Solution texts
      solutions: {
        1: 'Solution applied: Reconnected motor wires and checked the H-Bridge.',
        2: 'Solution applied: Optimized power system and replaced batteries.',
        3: 'Solution applied: Recalibrated and cleaned sensors.'
      },
      // Reset texts
      resets: {
        1: 'Complete reset: All systems have been restarted.',
        2: 'Partial reset: Only sensors have been restarted.'
      }
    }
  },
  // Adicione mais idiomas conforme necessário
  'es': {
    basic: {
      title: 'Robot Básico',
      description: 'Este es un robot simple, ideal para principiantes. ¡Aprende a montarlo paso a paso!',
      image: 'images/robot_basic.svg',
      materials: [
        '1 Arduino Uno',
        '2 Motores DC',
        '1 Chasis de plástico o madera',
        '2 Ruedas',
        '1 Rueda giratoria (para equilibrio)',
        '1 Puente H L298N',
        'Cables jumper',
        '1 Batería de 9V o 4 pilas AA con soporte',
        'Tornillos y tuercas',
        'Cinta de doble cara o pegamento caliente'
      ],
      steps: [
        {
          title: 'Preparación del Chasis',
          description: 'Corta el chasis en la forma deseada (generalmente rectangular) con dimensiones aproximadas de 15cm x 10cm. Haz agujeros para fijar los motores y la rueda giratoria.'
        },
        {
          title: 'Montaje de Motores',
          description: 'Fija los dos motores DC en la parte trasera del chasis, uno a cada lado, usando tornillos o pegamento caliente. Asegúrate de que estén alineados.'
        },
        {
          title: 'Instalación de Ruedas',
          description: 'Encaja las ruedas en los ejes de los motores. Instala la rueda giratoria en la parte frontal del chasis para dar estabilidad al robot.'
        },
        {
          title: 'Conexión del Puente H',
          description: 'Fija el puente H L298N en el chasis. Conecta los cables de los motores a las salidas del puente H (OUT1, OUT2 para el primer motor y OUT3, OUT4 para el segundo).'
        },
        {
          title: 'Conexión del Arduino',
          description: 'Posiciona el Arduino en el chasis y conéctalo al puente H: pines IN1, IN2, IN3 e IN4 del puente H a los pines digitales del Arduino (ej: 8, 9, 10, 11). Conecta el pin ENA al pin PWM 5 y ENB al pin PWM 6 del Arduino.'
        },
        {
          title: 'Alimentación',
          description: 'Conecta la batería de 9V o el soporte de pilas a la entrada de alimentación del puente H. También puedes alimentar el Arduino directamente a través de su entrada de alimentación o vía USB durante las pruebas.'
        },
        {
          title: 'Programación',
          description: 'Conecta el Arduino al ordenador vía USB y carga el código básico para el control de los motores. El código debe definir los pines como salidas y controlar la velocidad y dirección de los motores.'
        },
        {
          title: 'Prueba',
          description: 'Después de cargar el programa, prueba el robot para verificar que los motores funcionan correctamente y que el robot se mueve hacia adelante, hacia atrás y gira según lo programado.'
        }
      ]
    },
    // Adicione os outros níveis e textos da interface para espanhol
    ui: {
      langLabel: 'Idioma:',
      showStepsBtn: 'Ver Cómo Hacer',
      materialsTitle: 'Materiales Necesarios',
      stepsTitle: 'Paso a Paso',
      errorToolsTitle: 'Herramientas de Diagnóstico',
      detectErrorTitle: 'Detectar Errores',
      solveErrorTitle: 'Solucionar Errores',
      resetErrorTitle: 'Resetear Errores',
      footerText: '© 2023 Guía Completa de Robots. Todos los derechos reservados.',
      // Textos de errores
      errors: {
        1: 'Error 1: El motor no está funcionando correctamente. Verifica las conexiones.',
        2: 'Error 2: Batería con carga baja. Recarga o reemplaza las baterías.',
        3: 'Error 3: El sensor ultrasónico no está detectando obstáculos.',
        4: 'Error 4: Problemas en la comunicación entre Arduino y Raspberry Pi.',
        5: 'Error 5: Los sensores de línea no están calibrados correctamente.'
      },
      // Textos de soluciones
      solutions: {
        1: 'Solución aplicada: Reconexión de los cables del motor y verificación del puente H.',
        2: 'Solución aplicada: Sistema de alimentación optimizado y baterías reemplazadas.',
        3: 'Solución aplicada: Recalibración y limpieza de los sensores.'
      },
      // Textos de resets
      resets: {
        1: 'Reset completo: Todos los sistemas han sido reiniciados.',
        2: 'Reset parcial: Solo los sensores han sido reiniciados.'
      }
    }
  }
};

// Variáveis globais
let currentLanguage = 'pt-br';
let currentRobotLevel = 'basic';
let errorTimeout;

// Elementos DOM
const langSelector = document.getElementById('lang');
const robotTitle = document.getElementById('robot-title');
const robotImg = document.getElementById('robot-img');
const robotDesc = document.getElementById('robot-desc');
const materialsList = document.getElementById('materials-list');
const stepsList = document.getElementById('steps-list');
const showStepsBtn = document.getElementById('show-steps-btn');
const materialsContainer = document.getElementById('materials-container');
const stepsContainer = document.getElementById('steps-container');
const errorMsg = document.getElementById('error-message');
const errorNotification = document.getElementById('error-notification');
const closeErrorBtn = document.getElementById('close-error');

// Elementos de texto da interface
const langLabel = document.getElementById('lang-label');
const materialsTitle = document.getElementById('materials-title');
const stepsTitle = document.getElementById('steps-title');
const errorToolsTitle = document.getElementById('error-tools-title');
const detectErrorTitle = document.getElementById('detect-error-title');
const solveErrorTitle = document.getElementById('solve-error-title');
const resetErrorTitle = document.getElementById('reset-error-title');
const footerText = document.getElementById('footer-text');
const siteTitle = document.getElementById('site-title');

// Botões de navegação
const navBasic = document.getElementById('nav-basic');
const navIntermediate = document.getElementById('nav-intermediate');
const navAdvanced = document.getElementById('nav-advanced');

// Botões de erro
const detectErrorBtns = [
  document.getElementById('detect-error-1'),
  document.getElementById('detect-error-2'),
  document.getElementById('detect-error-3'),
  document.getElementById('detect-error-4'),
  document.getElementById('detect-error-5')
];

const solveErrorBtns = [
  document.getElementById('solve-error-1'),
  document.getElementById('solve-error-2'),
  document.getElementById('solve-error-3')
];

const resetErrorBtns = [
  document.getElementById('reset-error-1'),
  document.getElementById('reset-error-2')
];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Configurar seletor de idioma
  langSelector.addEventListener('change', changeLanguage);
  
  // Configurar botões de navegação
  navBasic.addEventListener('click', () => changeRobotLevel('basic'));
  navIntermediate.addEventListener('click', () => changeRobotLevel('intermediate'));
  navAdvanced.addEventListener('click', () => changeRobotLevel('advanced'));
  
  // Configurar botão de mostrar passos
  showStepsBtn.addEventListener('click', toggleSteps);
  
  // Configurar botão de fechar erro
  closeErrorBtn.addEventListener('click', closeError);
  
  // Carregar conteúdo inicial
  updateContent();
  
  // Verificar se as imagens carregaram corretamente
  checkImagesLoaded();
  
  // Registra o service worker para PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration.scope);
      })
      .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  }
});

// Funções
function changeLanguage() {
  currentLanguage = langSelector.value;
  updateContent();
}

function changeRobotLevel(level) {
  currentRobotLevel = level;
  
  // Atualizar classes ativas nos botões de navegação
  navBasic.classList.remove('active');
  navIntermediate.classList.remove('active');
  navAdvanced.classList.remove('active');
  
  if (level === 'basic') navBasic.classList.add('active');
  else if (level === 'intermediate') navIntermediate.classList.add('active');
  else if (level === 'advanced') navAdvanced.classList.add('active');
  
  // Esconder os containers de materiais e passos ao mudar de nível
  materialsContainer.classList.add('hidden');
  stepsContainer.classList.add('hidden');
  
  updateContent();
}

function toggleSteps() {
  if (materialsContainer.classList.contains('hidden')) {
    materialsContainer.classList.remove('hidden');
    stepsContainer.classList.remove('hidden');
    showStepsBtn.textContent = robotData[currentLanguage].ui.showStepsBtn + ' ↑';
  } else {
    materialsContainer.classList.add('hidden');
    stepsContainer.classList.add('hidden');
    showStepsBtn.textContent = robotData[currentLanguage].ui.showStepsBtn;
  }
}

function updateContent() {
  const data = robotData[currentLanguage];
  const robot = data[currentRobotLevel];
  const ui = data.ui;
  
  // Atualizar textos da interface
  siteTitle.textContent = 'Guia Completo de Robôs'; // Mantém o título do site em português
  langLabel.textContent = ui.langLabel;
  showStepsBtn.textContent = ui.showStepsBtn;
  materialsTitle.textContent = ui.materialsTitle;
  stepsTitle.textContent = ui.stepsTitle;
  errorToolsTitle.textContent = ui.errorToolsTitle;
  detectErrorTitle.textContent = ui.detectErrorTitle;
  solveErrorTitle.textContent = ui.solveErrorTitle;
  resetErrorTitle.textContent = ui.resetErrorTitle;
  footerText.textContent = ui.footerText;
  
  // Atualizar textos dos botões de erro
  for (let i = 0; i < detectErrorBtns.length; i++) {
    detectErrorBtns[i].textContent = ui.detectErrorTitle + ' ' + (i + 1);
  }
  
  for (let i = 0; i < solveErrorBtns.length; i++) {
    solveErrorBtns[i].textContent = ui.solveErrorTitle + ' ' + (i + 1);
  }
  
  for (let i = 0; i < resetErrorBtns.length; i++) {
    resetErrorBtns[i].textContent = ui.resetErrorTitle + ' ' + (i + 1);
  }
  
  // Atualizar conteúdo do robô
  robotTitle.textContent = robot.title;
  
  // Configurar tratamento de erro para a imagem
  robotImg.onerror = function() {
    console.error('Erro ao carregar a imagem:', robot.image);
    showError('Erro: Não foi possível carregar a imagem do robô. Verifique se o arquivo existe no diretório correto.');
    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666">Imagem não disponível</text></svg>';
  };
  
  // Atualizar a imagem do robô
  robotImg.src = robot.image;
  robotImg.alt = robot.title;
  robotDesc.textContent = robot.description;
  
  // Atualizar lista de materiais
  materialsList.innerHTML = '';
  robot.materials.forEach(material => {
    const li = document.createElement('li');
    li.textContent = material;
    materialsList.appendChild(li);
  });
  
  // Atualizar lista de passos
  stepsList.innerHTML = '';
  robot.steps.forEach((step, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';
    
    const stepTitle = document.createElement('h4');
    stepTitle.textContent = step.title;
    
    const stepDesc = document.createElement('p');
    stepDesc.textContent = step.description;
    
    stepDiv.appendChild(stepTitle);
    stepDiv.appendChild(stepDesc);
    stepsList.appendChild(stepDiv);
  });
  
  // Resetar o botão de mostrar passos
  if (!materialsContainer.classList.contains('hidden')) {
    showStepsBtn.textContent = ui.showStepsBtn + ' ↑';
  } else {
    showStepsBtn.textContent = ui.showStepsBtn;
  }
}

function detectError(errorNumber) {
  const errorText = robotData[currentLanguage].ui.errors[errorNumber];
  showError(errorText);
}

function solveError(errorNumber) {
  const solutionText = robotData[currentLanguage].ui.solutions[errorNumber];
  showError(solutionText);
}

function resetError(errorNumber) {
  const resetText = robotData[currentLanguage].ui.resets[errorNumber];
  showError(resetText);
}

function showError(message) {
  // Limpar timeout anterior se existir
  if (errorTimeout) {
    clearTimeout(errorTimeout);
  }
  
  // Mostrar mensagem de erro
  errorMsg.textContent = message;
  errorNotification.classList.add('show');
  
  // Configurar timeout para esconder após 10 segundos
  errorTimeout = setTimeout(() => {
    closeError();
  }, 10000);
}

function closeError() {
  errorNotification.classList.remove('show');
  if (errorTimeout) {
    clearTimeout(errorTimeout);
  }
}

// Função para verificar se as imagens carregaram corretamente
function checkImagesLoaded() {
  const robotImg = document.getElementById('robot-img');
  
  robotImg.onerror = function() {
    showError('Erro: Não foi possível carregar a imagem do robô. Verifique se o arquivo existe no diretório correto.');
    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666">Imagem não disponível</text></svg>';
  };
  
  // Verificar todas as imagens ao mudar de nível
  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(src);
      img.src = src;
    });
  }
  
  // Pré-carregar todas as imagens
  const imagesToPreload = [
    'images/robot_basic.svg',
    'images/robot_intermediate.svg',
    'images/robot_advanced.svg'
  ];
  
  Promise.all(imagesToPreload.map(src => preloadImage(src).catch(e => e)))
    .then(results => {
      const failedImages = results.filter(result => typeof result === 'string');
      if (failedImages.length > 0) {
        console.warn('Algumas imagens não puderam ser carregadas:', failedImages);
      }
    });
}