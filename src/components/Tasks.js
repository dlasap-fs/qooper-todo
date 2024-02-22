import styled from "styled-components";
import { StyledSpan } from "./StyledComponents/StyledSpan";
import CloseTaskButton from "./CloseButton";
import { useState } from "react";

/**
 * A styled Container Div for Tasks page.
 * @component
 */
const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * A styled Form for Tasks page.
 * @component
 */
const TaskFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 632px;
  height: 40px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

/**
 * A styled input for Tasks page.
 * @component
 */
const TaskInput = styled.input`
  margin: 0;
  width: 100%;
  max-height: 100%;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 16px;
  font-weight: 400;
  padding: 12px 16px;
  margin: ${(props) => props.margin};
`;

/**
 * A styled Header for Tasks page.
 * @component
 */
const TaskHeader = styled.h3`
  color: var(--black-txt);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 24px;
  padding: 0px;
  margin: 0px;
`;

/**
 * A styled Div for Tasks page when no Data is available.
 * @component
 */
const NoTask = styled.div`
  color: var(--purple-txt);
`;

/**
 * A styled ul for Tasks page.
 * @component
 */
const UnorderedList = styled.ul`
  margin: 24px 0px 24px 0px;
  padding: 0px;
`;

/**
 * A styled div card for Tasks page.
 * @component
 */
const StyledListCard = styled.div`
  margin: 0px;
  padding: ${(props) => props.padding ?? "24px"};
  width: 588px;
  max-height: 64px;
  background-color: var(--gray-card-bg);
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * A styled input during edits for Tasks page.
 * @component
 */
const EditInput = styled.input`
  margin: 0;
  width: 90%;
  height: 8px;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 16px;
  font-weight: 400;
  padding: 8px 16px;
  margin: ${(props) => props.margin};
`;

/**
 * Component for displaying, adding, removing and editing To Do data.
 *
 * @param {Function} handleSubmitTodo  - Triggers function when LOGIN button is clicked
 * @param {Object}   data              - To do Data
 * @param {Function} handleRemoveTodo  - Function for removing Todo
 * @param {Record<string,any>} todo    - value for current todo input
 * @param {Function} setTodo           - Function for setting todo input
 * @param {Function} handleEditTodo    - Edit To do Function
 * @component
 * @example
 * const handleSubmitTodo =()=> = sampleFunction()
 * const handleRemoveTodo =()=> = sampleFunction()
 * const handleEditTodo =()=> = sampleFunction()
 * const setTodo = () => sampleFunction()
 * const todosList = [...todoData]
 *
 * return (
 *   <Tasks
 *   handleSubmitTodo={handleSubmitTodo}
 *   handleRemoveTodo={handleRemoveTodo}
 *   handleEditTodo={handleEditTodo}
 *   setTodo={setTodo}
 *   data={todosList}
 *   todo={todo}
 *   />
 * )
 */
export default function Tasks({ handleSubmitTodo, data, handleRemoveTodo, todo, setTodo, handleEditTodo }) {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitTodo(e);
    }
  };
  return (
    <TasksContainer data-testid="tasksComponent">
      <TaskFormContainer>
        <TaskInput
          placeholder="Type a task and press Enter to add"
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodo(e.target.value)}
        />
      </TaskFormContainer>
      <TaskHeader>Tasks</TaskHeader>
      <UnorderedList className="allTodo">
        {data && data?.length > 0 ? (
          data?.map((td) => {
            return (
              <StyledListCard key={td.id} onClick={() => setSelectedTodo(td)} onMouseLeave={() => setSelectedTodo(null)}>
                {selectedTodo?.id === td?.id ? (
                  <EditInput
                    autoFocus
                    defaultValue={selectedTodo?.todo}
                    onBlur={() => setSelectedTodo(null)}
                    onChange={(e) =>
                      setSelectedTodo((prev) => {
                        return {
                          ...prev,
                          todo: e.target.value,
                        };
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEditTodo(e, selectedTodo);
                        setSelectedTodo(null);
                      }
                    }}
                  />
                ) : (
                  <StyledSpan lineheight="16px">{td.todo}</StyledSpan>
                )}

                <CloseTaskButton onClick={() => handleRemoveTodo(td)} />
              </StyledListCard>
            );
          })
        ) : (
          <NoTask>
            <p
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              :(
            </p>
            There is no task yet!
          </NoTask>
        )}
      </UnorderedList>
    </TasksContainer>
  );
}
