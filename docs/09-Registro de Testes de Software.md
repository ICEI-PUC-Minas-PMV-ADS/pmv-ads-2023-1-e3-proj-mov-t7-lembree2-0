# Registro de Testes de Software

| ID do Teste | ID do Requisito | Descrição do Requisito | Prioridade | Cenário de Teste | Passos de Execução | Resultado Esperado | Resultado Obtido | Status |
|-------------|----------------|------------------------|------------|-----------------|--------------------|--------------------|-----------------|--------|
| TC-001 | RF-001 | Criar uma nova tarefa. | ALTA | Criar tarefa com sucesso | 1. Acessar a tela de criação de tarefa<br>2. Preencher os campos obrigatórios<br>3. Clicar no botão "Salvar" | Tarefa é criada com sucesso e é exibida na lista de tarefas. |  | Sucesso |
| TC-002 | RF-001 | Criar uma nova tarefa. | ALTA | Não é possível criar tarefa sem preencher os campos obrigatórios | 1. Acessar a tela de criação de tarefa<br>2. Não preencher os campos obrigatórios<br>3. Clicar no botão "Salvar" | Sistema exibe mensagem de erro indicando que é necessário preencher os campos obrigatórios. |  | Sucesso |
| TC-003 | RF-002 | Concluir uma tarefa. | MÉDIO | Concluir tarefa com sucesso | 1. Selecionar uma tarefa na lista de tarefas<br>2. Clicar no botão "Concluir"<br>3. Confirmar a ação | Tarefa é marcada como concluída e exibida como tal na lista de tarefas. |  | Sucesso |
| TC-004 | RF-002 | Concluir uma tarefa. | MÉDIO | Não é possível concluir tarefa já concluída | 1. Selecionar uma tarefa na lista de tarefas que já esteja marcada como concluída<br>2. Clicar no botão "Concluir"<br>3. Confirmar a ação | Sistema exibe mensagem de erro indicando que a tarefa já foi concluída. |  | Sucesso |
| TC-005 | RF-003 | Editar uma tarefa. | MÉDIO | Editar tarefa com sucesso | 1. Selecionar uma tarefa na lista de tarefas<br>2. Clicar no botão "Editar"<br>3. Realizar as alterações necessárias<br>4. Clicar no botão "Salvar" | Tarefa é atualizada com as alterações realizadas e exibida corretamente na lista de tarefas. |  | Sucesso |
| TC-006 | RF-003 | Editar uma tarefa. | MÉDIO | Não é possível editar tarefa já concluída | 1. Selecionar uma tarefa na lista de tarefas que já esteja marcada como concluída<br>2. Clicar no botão "Editar"<br>3. Tentar realizar alterações<br>4. Clicar no botão "Salvar" | Sistema exibe mensagem de erro indicando que a tarefa já foi concluída e não pode ser editada. |  | Sucesso |


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
