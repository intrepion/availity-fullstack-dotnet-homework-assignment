using ParenthesesLibrary;

namespace ParenthesesTests;

public class CheckTests
{
    [Theory]
    [InlineData("()", true)]
    [InlineData("(", false)]
    [InlineData("()()", false)]
    [InlineData(")(", false)]
    public void HappyPath(string code, bool expected)
    {
        // Arrange

        // Act
        var actual = ParenthesesChecker.Check(code);

        // Assert
        Assert.Equal(expected, actual);
    }
}
