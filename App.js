import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountsTableHead: ['ID', 'Username', 'Password', 'Usertype'],
      accountsTableData: [
        ['1', 'MIABETASA', 'password123', 'STUDENT'],
        ['2', 'JerryAle', 'password123', 'Teacher'],
      ],
      usersTableHead: ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'],
      usersTableData: [
        ['1', 'MIA', 'BETASA', 'Information Technology', '3', 'A'],
        ['2',  'Jerry', 'Ale', 'Information Technology', '3', 'B'],
      ],
      studentsTableData: [
        { id: '1', name: 'MIA BETASA', course: 'Information Technology' },
        { id: '2', name: 'Jerry Ale', course: 'Information Technology' },
      ],
    };
  }

  render() {
    const { accountsTableHead, accountsTableData, usersTableHead, usersTableData, studentsTableData } = this.state;

    return (
      <View>
        <ScrollView>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={accountsTableHead} style={{ backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }} />
            <Rows data={accountsTableData} textStyle={{ margin: 6 }} />
          </Table>

          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={usersTableHead} style={{ backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }} />
            <ScrollView>
              <Rows data={usersTableData} textStyle={{ margin: 6 }} />
            </ScrollView>
          </Table>

          <FlatList
            data={studentsTableData}
            renderItem={({ item }) => (
              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={['ID', 'Name', 'Course']} style={{ backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }} />
                <Rows data={[[item.id, item.name, item.course]]} textStyle={{ margin: 6 }} />
              </Table>
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}