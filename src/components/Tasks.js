import styled from "styled-components";
import { StyledSpan } from "./StyledComponents/StyledSpan";
import CloseTaskButton from "./CloseButton";
import { useState } from "react";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TaskFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 632px;
  height: 40px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

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

const TaskHeader = styled.h3`
  color: var(--black-txt);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 24px;
  padding: 0px;
  margin: 0px;
`;

const NoTask = styled.div`
  color: var(--purple-txt);
`;

const UnorderedList = styled.ul`
  margin: 24px 0px 0px 0px;
  padding: 0px;
`;
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
`;

const EditInput = styled.input`
  margin: 0;
  width: 100%;
  height: 8px;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 16px;
  font-weight: 400;
  padding: 8px 16px;
  margin: ${(props) => props.margin};
`;

export default function Tasks({ handleSubmitTodo, data, handleRemoveTodo, todo, setTodo, handleEditTodo }) {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitTodo(e);
    }
  };
  return (
    <TasksContainer>
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
