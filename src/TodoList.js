import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import * as TodoActions from 'store/actions/todos';
// TodoActions : { addTodo } * Todas as Actions dentro de todos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainer: {
    flexDirection: 'row',
  },
});

const TodoList = ({ todos, addTodo, delTodo }) => (
  <View style={styles.container}>
    { todos.map(todo => (
      <View style={styles.todoContainer} key={todo.id}>
        <Text>{todo.text}</Text>
        <TouchableOpacity onPress={() => { delTodo(todo.id); }}>
          <Text> Excluir</Text>
        </TouchableOpacity>
      </View>
      ))
    }
    <TouchableOpacity onPress={() => { addTodo('Fazer e tomar café Novo..'); }}>
      <Text>Adicionar Novo Todo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
