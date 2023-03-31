# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

| ID do Teste | ID do Requisito | Descrição do Requisito | Prioridade | Cenário de Teste                                                 | Passos de Execução                                                                                                                                                      | Resultado Esperado                                                                             | Resultado Obtido | Status |
|-------------|-----------------|------------------------|------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------|--------|
| TC-001      | RF-001          | Criar uma nova tarefa. | ALTA       | Criar tarefa com sucesso                                         | 1. Acessar a tela de criação de tarefa 2. Preencher os campos obrigatórios 3. Clicar no botão "Salvar"                                                                  | Tarefa é criada com sucesso e é exibida na lista de tarefas.                                   |                  |        |
| TC-002      | RF-001          | Criar uma nova tarefa. | ALTA       | Não é possível criar tarefa sem preencher os campos obrigatórios | 1. Acessar a tela de criação de tarefa 2. Não preencher os campos obrigatórios 3. Clicar no botão "Salvar"                                                              | Sistema exibe mensagem de erro indicando que é necessário preencher os campos obrigatórios.    |                  |        |
| TC-003      | RF-002          | Concluir uma tarefa.   | MÉDIO      | Concluir tarefa com sucesso                                      | 1. Selecionar uma tarefa na lista de tarefas 2. Clicar no botão "Concluir" 3. Confirmar a ação                                                                          | Tarefa é marcada como concluída e exibida como tal na lista de tarefas.                        |                  |        |
| TC-004      | RF-002          | Concluir uma tarefa.   | MÉDIO      | Não é possível concluir tarefa já concluída                      | 1. Selecionar uma tarefa na lista de tarefas que já esteja marcada como concluída 2. Clicar no botão "Concluir" 3. Confirmar a ação                                     | Sistema exibe mensagem de erro indicando que a tarefa já foi concluída.                        |                  |        |
| TC-005      | RF-003          | Editar uma tarefa.     | MÉDIO      | Editar tarefa com sucesso                                        | 1. Selecionar uma tarefa na lista de tarefas 2. Clicar no botão "Editar" 3. Realizar as alterações necessárias 4. Clicar no botão "Salvar"                              | Tarefa é atualizada com as alterações realizadas e exibida corretamente na lista de tarefas.   |                  |        |
| TC-006      | RF-003          | Editar uma tarefa.     | MÉDIO      | Não é possível editar tarefa já concluída                        | 1. Selecionar uma tarefa na lista de tarefas que já esteja marcada como concluída 2. Clicar no botão "Editar" 3. Tentar realizar alterações 4. Clicar no botão "Salvar" | Sistema exibe mensagem de erro indicando que a tarefa já foi concluída e não pode ser editada. |                  |        | 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
