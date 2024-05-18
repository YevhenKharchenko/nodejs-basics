import { StudentsCollection } from '../db/models/student.js';

export const getAllStudents = async () => {
  const students = await StudentsCollection.find();
  return students;
};

export const getStudentById = async (studentId) => {
  const student = await StudentsCollection.findById(studentId);
  return student;
};

export const addStudent = async () => {
  const student = new StudentsCollection({
    name: 'Jimbo Marsh',
    age: 43,
    gender: 'male',
    avgMark: 2.3,
    onDuty: true,
  });
  await student.save();
};
