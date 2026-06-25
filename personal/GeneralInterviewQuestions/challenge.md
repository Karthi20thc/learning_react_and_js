If you're preparing for an interview, you can answer this question using the **Situation → Challenge → Action → Result (STAR)** format.

### Example Answer

**"One challenge I faced was learning a new technology within a short deadline.**

When I was assigned a task that required skills I was not fully familiar with, I realized I needed to become productive quickly. To overcome this, I created a learning plan, completed relevant online training, reviewed project documentation, and regularly sought guidance from experienced team members.

I also practiced by building small sample solutions before working on the actual task. As a result, I was able to complete my assigned work on time and gained confidence in using the new technology. This experience taught me the importance of continuous learning, planning, and asking for help when needed."

### For a Fresher / Recent Joiner

**"A challenge I faced was adapting to a new work environment after joining a company.**

There were many new processes, tools, and team expectations to learn. To overcome this, I took detailed notes, attended training sessions actively, connected with colleagues for guidance, and spent extra time understanding the company's workflows.

Within a few weeks, I became comfortable with the processes and was able to contribute effectively to the team. This experience improved my adaptability and communication skills."

Since you've recently joined **EY GDS**, the second example may sound more natural and relevant during interviews or manager discussions.


------------------------------------------------------------------------------------------------------------------------


Here’s a **technical ReactJS-focused example** you can use for the interview question:

## Example: ReactJS Challenge and How I Overcame It

**"One technical challenge I faced in ReactJS was handling unnecessary re-renders in a component, which affected the performance of the application.**

In one of my React projects, I had a parent component that was passing data and callback functions to multiple child components. Whenever the parent component state changed, all child components were re-rendering even though their props had not changed. This caused the UI to become slow, especially when rendering lists or complex components.

To overcome this, I first analyzed the component rendering behavior using **React Developer Tools**. Then I optimized the application by using **React.memo** for child components, **useCallback** for functions, and **useMemo** for expensive calculations.

For example:

```jsx
const ChildComponent = React.memo(({ user, onSelect }) => {
  console.log("Child rendered");

  return (
    <div onClick={() => onSelect(user.id)}>
      {user.name}
    </div>
  );
});
```

And in the parent component:

```jsx
const handleSelect = useCallback((id) => {
  console.log("Selected user:", id);
}, []);

const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

After applying these optimizations, unnecessary re-renders were reduced, and the application became smoother and faster.

This challenge helped me understand React performance optimization better and taught me the importance of writing efficient and maintainable components."\*\*

***

## Short Version for Interview

**"One challenge I faced in ReactJS was unnecessary component re-rendering, which impacted performance. I handled it by using React Developer Tools to identify the issue and optimized the components using React.memo, useCallback, and useMemo. This improved rendering performance and helped me understand how React manages component updates."**

***

## Another Simple ReactJS Example

**"A challenge I faced was managing state between multiple components. Initially, I was passing props through many component levels, which made the code difficult to maintain. To solve this, I used React Context API to manage shared state in a cleaner way. This reduced prop drilling and made the application easier to understand and maintain."**
