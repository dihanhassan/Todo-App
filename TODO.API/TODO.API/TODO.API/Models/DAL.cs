using System.Data;
using System.Data.SqlClient;

namespace TODO.API.Models
{
    public class DAL
    {
        public Response GetAllTodos(SqlConnection connection)
        {
            Response response = new Response();
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM TodoTable", connection);
            DataTable dt = new DataTable();
            List<Todo> TodoList = new List<Todo>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Todo todo = new Todo();
                    todo.Id = Convert.ToInt32(dt.Rows[i]["Id"]);
                    todo.Title = Convert.ToString(dt.Rows[i]["Title"]);
                    todo.Descriptions = Convert.ToString(dt.Rows[i]["Descriptions"]);
                    todo.IsCompleted = Convert.ToInt32(dt.Rows[i]["IsCompleted"]);
                    todo.CreatedOn = Convert.ToDateTime(dt.Rows[i]["CreatedOn"]);
                    todo.DueDate = Convert.ToDateTime(dt.Rows[i]["DueDate"]);
                    todo.Prioritys = Convert.ToString(dt.Rows[i]["Prioritys"]);
                    TodoList.Add(todo);
                }
                if (TodoList.Count > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Data found";
                    response.ListTodos = TodoList;


                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Data found";
                    response.ListTodos = null;
                }
            }
            return response;
        }

        public Response AddTodo(SqlConnection connection, Todo todo)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("INSERT INTO TodoTable (Title , Descriptions ,CreatedOn ,IsCompleted ,DueDate, Prioritys) VALUES ('" + todo.Title + "', '" + todo.Descriptions + "', GETDATE() ,'" + todo.IsCompleted + "' , '" + todo.DueDate + "' , '" + todo.Prioritys + "' )", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {


                response.StatusCode = 200;
                response.StatusMessage = "Todo Added";

            }



            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No Data inserted";

            }
            return response;
        }

        public Response UpdateTodo(SqlConnection connection, Todo todo)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("UPDATE  TodoTable SET Title =  '" + todo.Title + "', Descriptions = '" + todo.Descriptions + "', DueDate = '" + todo.DueDate + "', Prioritys = '"+ todo.Prioritys+"'  WHERE ID = '" + todo.Id + "' ", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {


                response.StatusCode = 200;
                response.StatusMessage = "Todo Updated";

            }



            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Todo is not Updated";

            }
            return response;
        }

        public Response DeleteTodo(SqlConnection connection, int id)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("Delete from TodoTable WHERE ID = '" + id + "' ", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Todo deleted";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Erro !!";
            }
            return response;
        }
        

        public Response GetAllTodosUsingFilter(SqlConnection connection,string FilterOption)
        {
            Response response = new Response();
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM TodoTable ORDER BY '"+FilterOption+"'", connection);
            DataTable dt = new DataTable();
            List<Todo> TodoList = new List<Todo>();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Todo todo = new Todo();
                    todo.Id = Convert.ToInt32(dt.Rows[i]["Id"]);
                    todo.Title = Convert.ToString(dt.Rows[i]["Title"]);
                    todo.Descriptions = Convert.ToString(dt.Rows[i]["Descriptions"]);
                    todo.IsCompleted = Convert.ToInt32(dt.Rows[i]["IsCompleted"]);
                    todo.CreatedOn = Convert.ToDateTime(dt.Rows[i]["CreatedOn"]);
                    todo.DueDate = Convert.ToDateTime(dt.Rows[i]["DueDate"]);
                    todo.Prioritys = Convert.ToString(dt.Rows[i]["Prioritys"]);
                    TodoList.Add(todo);
                }
                if (TodoList.Count > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Data found";
                    response.ListTodos = TodoList;


                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Data found";
                    response.ListTodos = null;
                }
            }
            return response;
        }


    }
}
