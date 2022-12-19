namespace EnrollmentTests;

public class ConversionTests
{
    [Theory]
    [InlineData("Aaron Andrews", "Alice Bob", "Aaron Andrews", "Alice Bob")]
    public void FirstAndLastNameSortTest(string input1, string input2, string expected1, string expected2)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee { Name = input1 },
            new Enrollee { Name = input2 }
        };
    }
}