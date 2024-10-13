# Sistema de Prontuário - Backend

Este é o backend do sistema de prontuário para o Instituto Paliativo, desenvolvido para gerenciar o histórico e os registros de pacientes que recebem cuidados paliativos. O sistema permite que profissionais de saúde, como médicos, fisioterapeutas e psicólogos, criem, editem e visualizem fichas de evolução dos pacientes, garantindo um cuidado integrado e contínuo.

## Funcionalidades Principais

### 1. **Gerenciamento de Pacientes**

- **Cadastro de Pacientes**: Recepcionistas são responsáveis pelo cadastro inicial, inserindo informações como nome, idade, diagnóstico principal, histórico médico e contato de emergência.
- **Consulta e Atualização**: Permite a consulta e atualização dos dados pessoais e médicos dos pacientes cadastrados.

### 2. **Fichas de Evolução**

- **Criação de Fichas**: Cada atendimento cria uma ficha separada, específica para cada área de atuação (médico, fisioterapeuta, psicólogo, etc.).
- **Histórico Cronológico**: Todas as fichas são organizadas cronologicamente, facilitando a consulta de atendimentos anteriores.
- **Ficha Geral**: Resumo atualizado das últimas evoluções do paciente, consolidando as informações de todas as especialidades.

### 3. **Acessos Personalizados**

- **ADMIN**: Acesso total, permitindo gestão de usuários, permissões e configurações do sistema.
- **Profissionais de Saúde**: Cada profissional pode criar, editar e visualizar as fichas de sua especialidade. Todos os profissionais podem visualizar todas as fichas, mas só o criador pode editar ou apagar suas respectivas fichas.
- **Recepcionistas**: Responsáveis pelo cadastro de pacientes e atualização de dados demográficos.

### 4. **Perfis de Profissionais de Saúde**

- **Médico**: Registra evoluções e acompanha os tratamentos e diagnósticos médicos.
- **Fisioterapeuta**: Cria fichas de evolução relacionadas à reabilitação física dos pacientes.
- **Psicólogo**: Registra atendimentos psicológicos e acompanha o bem-estar mental do paciente.
- **Enfermeiro**: Registra os cuidados gerais com o paciente, monitorando sinais vitais e administrando medicação.
- **Arteterapeuta**: Acompanha atividades terapêuticas relacionadas à arte, focando no bem-estar emocional do paciente.
- **Terapeuta Ocupacional**: Registra evoluções voltadas para a autonomia do paciente nas atividades do dia a dia.
- **Fonoaudiólogo**: Acompanha e registra a evolução das funções de fala e deglutição.
- **Assistente Social**: Registra intervenções sociais e faz o acompanhamento do contexto familiar e social do paciente.

### 5. **Histórico de Fichas**

- **Evolução do Paciente**: Registro cronológico das fichas por especialidade e atendimento.
- **Ficha Geral Consolidada**: Resumo atualizado com as informações mais recentes de todas as áreas.

### 6. **Ficha de pré-atendimento**

- **Registro de Sintomas**: Acompanhamento de sintomas como dor, náusea, fadiga, apetite, evacuações, oxigenação, entre outros.
- **Escalas Numéricas**: Utilização de escalas de 0 a 10 para avaliar a intensidade de sintomas, como dor.

### 7. **Plano de Cuidado**

- **Discussão Interdisciplinar**: Permite que a equipe multidisciplinar discuta e registre um plano de cuidado integrado, garantindo uma abordagem holística para o paciente.

### 8. **Notificação de Equipe**

- **Alertas**: Profissionais são notificados sempre que uma nova evolução ou atendimento é registrado no prontuário do paciente.

### 9. **Suporte a Protocolos e Manuais**

- O sistema deve permitir o acesso a protocolos e manuais de atendimento, garantindo que os profissionais sigam as diretrizes estabelecidas para os cuidados paliativos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Nest.js**: Framework utilizado para a construção da API.
- **JWT**: Para autenticação e controle de acesso baseado em tokens.
- **Docker**: Containerização do ambiente de desenvolvimento e produção.
- **Git**: Controle de versão.

---

Esse sistema foi desenvolvido com o objetivo de oferecer um ambiente colaborativo, onde os diferentes profissionais de saúde possam trabalhar juntos no cuidado ao paciente, garantindo que todos tenham acesso às informações necessárias para prestar o melhor atendimento. Se no futuro houver necessidade de expansão, o sistema poderá ser atualizado com novos módulos e funcionalidades.
