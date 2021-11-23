/**
 * This component it's an example from And design, namely "Editable row", but I changed here some logic
 */

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {
  Table,
  Input,
  Popconfirm,
  Form,
  Select,
  Button,
  DatePicker,
} from "antd";

import {
  editMedicalHistoryItem,
  removeMedicalHistory,
} from "../../../redux/reducers/millitaryReducer";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const setTypeOfInput = (inputType) => {
    if (inputType === "placeOfTreatment") {
      return (
        <Select>
          <Select.Option value="At home">At home</Select.Option>
          <Select.Option value="In the hospital">In the hospital</Select.Option>
          <Select.Option value="In the medical point">
            In the medical point
          </Select.Option>
        </Select>
      );
    } else if (
      inputType === "onsetOfDeases" ||
      inputType === "dayOfDischarge"
    ) {
      return <DatePicker format="DD.MM.YYYY" />;
    } else {
      return <Input />;
    }
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `
          Please fill in the field`,
            },
          ]}
          style={{ margin: 0 }}
        >
          {setTypeOfInput(dataIndex)}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableOfHistory = ({ data, type, id }) => {
  const [form] = Form.useForm();
  const [insideData, setData] = useState(data);
  const [editingKey, setEditingKey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setData(data);
  }, [data]);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    // I change the type data of first and fourth columns, because the DatePicker from antd is waiting a Moment object
    form.setFieldsValue({
      onsetOfDeases: record.onsetOfDeases.format("DD.MM.YYYY"),
      nameOfDiagnosis: "",
      placesOfTreatment: "",
      dayOfDischarge: record.dayOfDischarge.format("DD.MM.YYYY"),
      numberOfIncapacitatedDay: "",
      ...record,
    });

    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const deleteRow = (record) => {
    const { key, placeOfTreatment } = record;
    dispatch(removeMedicalHistory({ key, id, type, placeOfTreatment }));
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const { onsetOfDeases, dayOfDischarge } = row;
      row.numberOfIncapacitatedDay = dayOfDischarge.diff(onsetOfDeases, "days");

      const newData = [...insideData];
      const index = newData.findIndex((item) => item.key === key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");

        // change data date, in order to they displayed correctly
        const data = {
          ...newData[index],
          onsetOfDeases: onsetOfDeases.format("YYYY-MM-DD"),
          dayOfDischarge: dayOfDischarge.format("YYYY-MM-DD"),
        };

        dispatch(editMedicalHistoryItem({ data, id, type }));
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.log("Validate failed", error);
    }
  };

  const columns = [
    {
      title: "Onset of disease",
      dataIndex: "onsetOfDeases",
      width: "18%",
      editable: true,
      render: (momentObj) => momentObj.format("YYYY-MM-DD"),
    },

    {
      title: "Diagnosis",
      dataIndex: "nameOfDiagnosis",
      editable: true,
    },

    {
      title: "Place of treatment",
      dataIndex: "placeOfTreatment",
      editable: true,
    },
    {
      title: "Day of discharge",
      dataIndex: "dayOfDischarge",
      width: "18%",
      editable: true,
      render: (momentObj) => momentObj.format("YYYY-MM-DD"),
    },
    {
      title: "Days in treatment",
      dataIndex: "numberOfIncapacitatedDay",
    },
    {
      title: "Edit",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <div style={{ display: "flex" }}>
            <Button
              size="small"
              type="primary"
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Оk
            </Button>
            <Popconfirm title="Cancel?" onConfirm={cancel}>
              <Button size="small">Cancel</Button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => deleteRow(record)}
            >
              <Button
                size="small"
                type="primary"
                style={{ marginLeft: 8, background: "#ef5350" }}
              >
                Delete
              </Button>
            </Popconfirm>
          </div>
        ) : (
          <Button
            disabled={editingKey !== ""}
            size="small"
            onClick={() => edit(record)}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const defineInputType = (dataIndex) => {
    if (dataIndex === "placesOfTreatment") return "placesOfTreatment";
    if (dataIndex === "nameOfDiagnosis") return "nameOfDiagnosis";
    if (dataIndex === "onsetOfDeases") return "onsetOfDeases";
    if (dataIndex === "dayOfDischarge") return "dayOfDischarge";
  };
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: defineInputType(col.dataIndex),
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} name="edit-form" component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={insideData}
        columns={mergedColumns}
        pagination={{
          pageSize: 4,
        }}
      />
    </Form>
  );
};

export default TableOfHistory;
