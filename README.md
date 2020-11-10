# React Course

The following repository holds the code example given in React course for Matrix
on September 2020.

## React Design Patterns

- HOC

```
const StrongerComponent = forms(configuration)(Component)
```

```
connect(...)(Component)
```

- Custom Hooks

```
function SomeComponent () {
	const someStrongStuff = useRouter(configuration)
}
```

- Render-props

```
<Formik>
	{
		(someStrongStuff) => {
			return (
				<form>
					...
				</form>
			)	
		}
	}
</Formik>
```

## Video

This course is recorded and uploaded to the following playlist:
[React Course](https://www.youtube.com/playlist?list=PLnHa2cF4cNDsXc5IuimITSNsEhxFCSwNd)

Additional React material are in my youtube channel:
[Yariv's youtube channel](https://www.youtube.com/user/ywarezk)

## Course Plan

1. React Introduction