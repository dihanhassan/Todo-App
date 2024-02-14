using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using TODO.API.Models;

namespace TODO.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TodoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllTodos")]
        
        public Response GetAllTodos()
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("serverConnection").ToString());
            Response response = new Response();
            DAL dal = new DAL();
            response = dal.GetAllTodos(connection);
            return response;
        }
        [HttpPost]
        [Route("AddTodo")]
        public Response AddTodo(Todo todo)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("serverConnection").ToString());
            Response response = new Response();
            DAL dal = new DAL();
            response = dal.AddTodo(connection, todo);
            return response;
        }

        [HttpPut]
        [Route("UpdateTodo")]
        public Response UpdateTodo(Todo todo)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("serverConnection").ToString());
            Response response = new Response();
            DAL dal = new DAL();
            response = dal.UpdateTodo(connection, todo);
            return response;
        }

        [HttpDelete]
        [Route("DeleteTodo/{id}")]
        public Response DeleteEmployee(int id)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("serverConnection").ToString());
            Response response = new Response();
            DAL dal = new DAL();
            response = dal.DeleteTodo(connection, id);
            return response;
        }




    }
}
