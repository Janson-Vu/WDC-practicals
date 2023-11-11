CREATE DATABASE enrolment;

-- 1st table
CREATE TABLE Students (
    student_id VARCHAR(63),
    given_name VARCHAR(255),
    family_name VARCHAR(255),
    program VARCHAR(63)
);

INSERT INTO Students VALUES(
    'a1111111',
    'Fang',
    'Li',
    'BE(Hons)(Soft)'
);

INSERT INTO Students VALUES(
    'a1111112',
    'Jane',
    'Brown',
    'BE(Hons)(Soft)'
);

INSERT INTO Students VALUES(
    'a1111113',
    'Bob',
    'Smith',
    'BCompSc'
);

INSERT INTO Students VALUES(
    'a1111114',
    'Wei',
    'Zhang',
    'BCompSc'
);

-- 2nd table
CREATE TABLE Subjects (
    subject_code VARCHAR(63),
    subject VARCHAR(255),
    faculty VARCHAR(63)
);

INSERT INTO Subjects VALUES (
    'COMP SCI 1102',
    'Object Oriented Programming',
    'ECMS'
);

INSERT INTO Subjects VALUES (
    'COMP SCI 2207',
    'Web and Database Computing',
    'ECMS'
);

INSERT INTO Subjects VALUES (
    'COMP SCI 2000',
    'Computer Systems',
    'ECMS'
);

INSERT INTO Subjects VALUES (
    'PHIL 2039',
    'Philosophy of Mind',
    'Arts'
);

-- 3rd table
CREATE TABLE Enrolments (
    student_id VARCHAR(63),
    subject_code VARCHAR(63),
    mark INT
);

INSERT INTO Enrolments VALUES (
    'a1111111',
    'COMP SCI 1102',
    62
);

INSERT INTO Enrolments VALUES (
    'a1111111',
    'COMP SCI 2000',
    80
);

INSERT INTO Enrolments VALUES (
    'a1111112',
    'COMP SCI 1102',
    55
);

INSERT INTO Enrolments VALUES (
    'a1111112',
    'COMP SCI 2207',
    80
);

INSERT INTO Enrolments VALUES (
    'a1111113',
    'PHIL 2039',
    65
);

INSERT INTO Enrolments VALUES (
    'a1111113',
    'COMP SCI 1102',
    46
);

INSERT INTO Enrolments VALUES (
    'a1111114',
    'COMP SCI 2207',
    67
);

INSERT INTO Enrolments VALUES (
    'a1111114',
    'COMP SCI 2000',
    49
);